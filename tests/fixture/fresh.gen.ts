// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $0 from "./routes/[name].tsx";
import * as $1 from "./routes/_404.tsx";
import * as $2 from "./routes/_500.tsx";
import * as $3 from "./routes/_app.tsx";
import * as $4 from "./routes/_middleware.ts";
import * as $5 from "./routes/api/get_only.ts";
import * as $6 from "./routes/api/head_override.ts";
import * as $7 from "./routes/assetsCaching/index.tsx";
import * as $8 from "./routes/books/[id].tsx";
import * as $9 from "./routes/connInfo.ts";
import * as $10 from "./routes/error_boundary.tsx";
import * as $11 from "./routes/event_handler_string.tsx";
import * as $12 from "./routes/event_handler_string_island.tsx";
import * as $13 from "./routes/evil.tsx";
import * as $14 from "./routes/failure.ts";
import * as $15 from "./routes/index.tsx";
import * as $16 from "./routes/intercept.tsx";
import * as $17 from "./routes/intercept_args.tsx";
import * as $18 from "./routes/islands/index.tsx";
import * as $19 from "./routes/islands/multiple_island_exports.tsx";
import * as $20 from "./routes/islands/returning_null.tsx";
import * as $21 from "./routes/islands/root_fragment.tsx";
import * as $22 from "./routes/islands/root_fragment_conditional_first.tsx";
import * as $23 from "./routes/layeredMdw/_middleware.ts";
import * as $24 from "./routes/layeredMdw/layer2-no-mw/without_mw.ts";
import * as $25 from "./routes/layeredMdw/layer2-with-params/[tenantId]/[id].ts";
import * as $26 from "./routes/layeredMdw/layer2-with-params/[tenantId]/_middleware.ts";
import * as $27 from "./routes/layeredMdw/layer2-with-params/_middleware.ts";
import * as $28 from "./routes/layeredMdw/layer2/_middleware.ts";
import * as $29 from "./routes/layeredMdw/layer2/abc.ts";
import * as $30 from "./routes/layeredMdw/layer2/index.ts";
import * as $31 from "./routes/layeredMdw/layer2/layer3/[id].ts";
import * as $32 from "./routes/layeredMdw/layer2/layer3/_middleware.ts";
import * as $33 from "./routes/layeredMdw/nesting/[tenant]/[environment]/[id].tsx";
import * as $34 from "./routes/layeredMdw/nesting/[tenant]/[environment]/_middleware.ts";
import * as $35 from "./routes/layeredMdw/nesting/[tenant]/_middleware.ts";
import * as $36 from "./routes/layeredMdw/nesting/_middleware.ts";
import * as $37 from "./routes/middleware-error-handler/_middleware.ts";
import * as $38 from "./routes/middleware-error-handler/index.tsx";
import * as $39 from "./routes/middleware_root.ts";
import * as $40 from "./routes/movies/[foo].json.ts";
import * as $41 from "./routes/movies/[foo]@[bar].ts";
import * as $42 from "./routes/not_found.ts";
import * as $43 from "./routes/params.tsx";
import * as $44 from "./routes/props/[id].tsx";
import * as $45 from "./routes/route-groups-islands/index.tsx";
import * as $46 from "./routes/route-groups/(bar)/(baz)/_layout.tsx";
import * as $47 from "./routes/route-groups/(bar)/(baz)/baz.tsx";
import * as $48 from "./routes/route-groups/(bar)/_layout.tsx";
import * as $49 from "./routes/route-groups/(bar)/bar.tsx";
import * as $50 from "./routes/route-groups/(bar)/boof/index.tsx";
import * as $51 from "./routes/route-groups/(foo)/_layout.tsx";
import * as $52 from "./routes/route-groups/(foo)/index.tsx";
import * as $53 from "./routes/signal_shared.tsx";
import * as $54 from "./routes/state-in-props/_middleware.ts";
import * as $55 from "./routes/state-in-props/index.tsx";
import * as $56 from "./routes/state-middleware/_middleware.ts";
import * as $57 from "./routes/state-middleware/foo/_middleware.ts";
import * as $58 from "./routes/state-middleware/foo/index.tsx";
import * as $59 from "./routes/static.tsx";
import * as $60 from "./routes/status_overwrite.tsx";
import * as $61 from "./routes/umlaut-äöüß.tsx";
import * as $62 from "./routes/wildcard.tsx";
import * as $$0 from "./islands/Counter.tsx";
import * as $$1 from "./islands/MultipleCounters.tsx";
import * as $$2 from "./islands/ReturningNull.tsx";
import * as $$3 from "./islands/RootFragment.tsx";
import * as $$4 from "./islands/RootFragmentWithConditionalFirst.tsx";
import * as $$5 from "./islands/StringEventIsland.tsx";
import * as $$6 from "./islands/Test.tsx";
import * as $$7 from "./islands/folder/Counter.tsx";
import * as $$8 from "./islands/folder/subfolder/Counter.tsx";
import * as $$9 from "./islands/kebab-case-counter-test.tsx";
import * as $$10 from "./routes/route-groups-islands/(_islands)/Counter.tsx";

const manifest = {
  routes: {
    "./routes/[name].tsx": $0,
    "./routes/_404.tsx": $1,
    "./routes/_500.tsx": $2,
    "./routes/_app.tsx": $3,
    "./routes/_middleware.ts": $4,
    "./routes/api/get_only.ts": $5,
    "./routes/api/head_override.ts": $6,
    "./routes/assetsCaching/index.tsx": $7,
    "./routes/books/[id].tsx": $8,
    "./routes/connInfo.ts": $9,
    "./routes/error_boundary.tsx": $10,
    "./routes/event_handler_string.tsx": $11,
    "./routes/event_handler_string_island.tsx": $12,
    "./routes/evil.tsx": $13,
    "./routes/failure.ts": $14,
    "./routes/index.tsx": $15,
    "./routes/intercept.tsx": $16,
    "./routes/intercept_args.tsx": $17,
    "./routes/islands/index.tsx": $18,
    "./routes/islands/multiple_island_exports.tsx": $19,
    "./routes/islands/returning_null.tsx": $20,
    "./routes/islands/root_fragment.tsx": $21,
    "./routes/islands/root_fragment_conditional_first.tsx": $22,
    "./routes/layeredMdw/_middleware.ts": $23,
    "./routes/layeredMdw/layer2-no-mw/without_mw.ts": $24,
    "./routes/layeredMdw/layer2-with-params/[tenantId]/[id].ts": $25,
    "./routes/layeredMdw/layer2-with-params/[tenantId]/_middleware.ts": $26,
    "./routes/layeredMdw/layer2-with-params/_middleware.ts": $27,
    "./routes/layeredMdw/layer2/_middleware.ts": $28,
    "./routes/layeredMdw/layer2/abc.ts": $29,
    "./routes/layeredMdw/layer2/index.ts": $30,
    "./routes/layeredMdw/layer2/layer3/[id].ts": $31,
    "./routes/layeredMdw/layer2/layer3/_middleware.ts": $32,
    "./routes/layeredMdw/nesting/[tenant]/[environment]/[id].tsx": $33,
    "./routes/layeredMdw/nesting/[tenant]/[environment]/_middleware.ts": $34,
    "./routes/layeredMdw/nesting/[tenant]/_middleware.ts": $35,
    "./routes/layeredMdw/nesting/_middleware.ts": $36,
    "./routes/middleware-error-handler/_middleware.ts": $37,
    "./routes/middleware-error-handler/index.tsx": $38,
    "./routes/middleware_root.ts": $39,
    "./routes/movies/[foo].json.ts": $40,
    "./routes/movies/[foo]@[bar].ts": $41,
    "./routes/not_found.ts": $42,
    "./routes/params.tsx": $43,
    "./routes/props/[id].tsx": $44,
    "./routes/route-groups-islands/index.tsx": $45,
    "./routes/route-groups/(bar)/(baz)/_layout.tsx": $46,
    "./routes/route-groups/(bar)/(baz)/baz.tsx": $47,
    "./routes/route-groups/(bar)/_layout.tsx": $48,
    "./routes/route-groups/(bar)/bar.tsx": $49,
    "./routes/route-groups/(bar)/boof/index.tsx": $50,
    "./routes/route-groups/(foo)/_layout.tsx": $51,
    "./routes/route-groups/(foo)/index.tsx": $52,
    "./routes/signal_shared.tsx": $53,
    "./routes/state-in-props/_middleware.ts": $54,
    "./routes/state-in-props/index.tsx": $55,
    "./routes/state-middleware/_middleware.ts": $56,
    "./routes/state-middleware/foo/_middleware.ts": $57,
    "./routes/state-middleware/foo/index.tsx": $58,
    "./routes/static.tsx": $59,
    "./routes/status_overwrite.tsx": $60,
    "./routes/umlaut-äöüß.tsx": $61,
    "./routes/wildcard.tsx": $62,
  },
  islands: {
    "./islands/Counter.tsx": $$0,
    "./islands/MultipleCounters.tsx": $$1,
    "./islands/ReturningNull.tsx": $$2,
    "./islands/RootFragment.tsx": $$3,
    "./islands/RootFragmentWithConditionalFirst.tsx": $$4,
    "./islands/StringEventIsland.tsx": $$5,
    "./islands/Test.tsx": $$6,
    "./islands/folder/Counter.tsx": $$7,
    "./islands/folder/subfolder/Counter.tsx": $$8,
    "./islands/kebab-case-counter-test.tsx": $$9,
    "./routes/route-groups-islands/(_islands)/Counter.tsx": $$10,
  },
  baseUrl: import.meta.url,
};

export default manifest;
