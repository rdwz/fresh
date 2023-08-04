import { updateCheck } from "./update_check.ts";
import {
  DAY,
  dirname,
  fromFileUrl,
  gte,
  join,
  posix,
  relative,
  walk,
} from "./deps.ts";
import { error } from "./error.ts";
import { FreshOptions } from "../server/mod.ts";
import { build } from "./build.ts";

const MIN_DENO_VERSION = "1.31.0";

export function ensureMinDenoVersion() {
  // Check that the minimum supported Deno version is being used.
  if (!gte(Deno.version.deno, MIN_DENO_VERSION)) {
    let message =
      `Deno version ${MIN_DENO_VERSION} or higher is required. Please update Deno.\n\n`;

    if (Deno.execPath().includes("homebrew")) {
      message +=
        "You seem to have installed Deno via homebrew. To update, run: `brew upgrade deno`\n";
    } else {
      message += "To update, run: `deno upgrade`\n";
    }

    error(message);
  }
}

async function collectDir(dir: string): Promise<string[]> {
  // Check if provided path is a directory
  try {
    const stat = await Deno.stat(dir);
    if (!stat.isDirectory) return [];
  } catch (err) {
    if (err instanceof Deno.errors.NotFound) return [];
    throw err;
  }

  const paths = [];
  const fileNames = new Set<string>();
  const routesFolder = walk(dir, {
    includeDirs: false,
    includeFiles: true,
    exts: ["tsx", "jsx", "ts", "js"],
  });

  for await (const entry of routesFolder) {
    const fileNameWithoutExt = relative(dir, entry.path).split(".").slice(0, -1)
      .join(".");

    if (fileNames.has(fileNameWithoutExt)) {
      throw new Error(
        `Route conflict detected. Multiple files have the same name: ${dir}${fileNameWithoutExt}`,
      );
    }

    fileNames.add(fileNameWithoutExt);
    paths.push(relative(dir, entry.path));
  }

  paths.sort();
  return paths;
}

interface Manifest {
  routes: string[];
  islands: string[];
}

export async function collect(directory: string): Promise<Manifest> {
  const [routes, islands] = await Promise.all([
    collectDir(join(directory, "./routes")),
    collectDir(join(directory, "./islands")),
  ]);

  return { routes, islands };
}

/**
 * Import specifiers must have forward slashes
 */
function toImportSpecifier(file: string) {
  let specifier = posix.normalize(file).replace(/\\/g, "/");
  if (!specifier.startsWith(".")) {
    specifier = "./" + specifier;
  }
  return specifier;
}

export async function generate(directory: string, manifest: Manifest) {
  const { routes, islands } = manifest;

  const output = `// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running \`dev.ts\`.

${
    routes.map((file, i) =>
      `import * as $${i} from "${toImportSpecifier(join("routes", file))}";`
    ).join(
      "\n",
    )
  }
${
    islands.map((file, i) =>
      `import * as $$${i} from "${toImportSpecifier(join("islands", file))}";`
    )
      .join("\n")
  }

const manifest = {
  routes: {
    ${
    routes.map((file, i) =>
      `${JSON.stringify(`${toImportSpecifier(join("routes", file))}`)}: $${i},`
    )
      .join("\n    ")
  }
  },
  islands: {
    ${
    islands.map((file, i) =>
      `${
        JSON.stringify(`${toImportSpecifier(join("islands", file))}`)
      }: $$${i},`
    )
      .join("\n    ")
  }
  },
  baseUrl: import.meta.url,
};

export default manifest;
`;

  const proc = new Deno.Command(Deno.execPath(), {
    args: ["fmt", "-"],
    stdin: "piped",
    stdout: "piped",
    stderr: "null",
  }).spawn();

  const raw = new ReadableStream({
    start(controller) {
      controller.enqueue(new TextEncoder().encode(output));
      controller.close();
    },
  });
  await raw.pipeTo(proc.stdin);
  const { stdout } = await proc.output();

  const manifestStr = new TextDecoder().decode(stdout);
  const manifestPath = join(directory, "./fresh.gen.ts");

  await Deno.writeTextFile(manifestPath, manifestStr);
  console.log(
    `%cThe manifest has been generated for ${routes.length} routes and ${islands.length} islands.`,
    "color: blue; font-weight: bold",
  );
}

export async function dev(
  base: string,
  entrypoint: string,
  options: Omit<FreshOptions, "loadSnapshot"> = {},
) {
  ensureMinDenoVersion();

  // Run update check in background
  updateCheck(DAY).catch(() => {});

  entrypoint = new URL(entrypoint, base).href;

  const dir = dirname(fromFileUrl(base));

  let currentManifest: Manifest;
  const prevManifest = Deno.env.get("FRSH_DEV_PREVIOUS_MANIFEST");
  if (prevManifest) {
    currentManifest = JSON.parse(prevManifest);
  } else {
    currentManifest = { islands: [], routes: [] };
  }
  const newManifest = await collect(dir);
  Deno.env.set("FRSH_DEV_PREVIOUS_MANIFEST", JSON.stringify(newManifest));

  const manifestChanged =
    !arraysEqual(newManifest.routes, currentManifest.routes) ||
    !arraysEqual(newManifest.islands, currentManifest.islands);

  if (manifestChanged) await generate(dir, newManifest);

  if (Deno.args.includes("build")) {
    await build(join(dir, "fresh.gen.ts"), options);
  } else {
    await import(entrypoint);
  }
}

function arraysEqual<T>(a: T[], b: T[]): boolean {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}
