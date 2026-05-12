import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // Vendor-style primitives shipped with the project but not used in the
    // current page composition. These third-party-derived sources have
    // their own React 19 idiom debt (refs-during-render, setState in
    // effect, raw <img>) that we'll address only when one is wired in.
    "src/components/ui/particles.tsx",
    "src/components/ui/meteors.tsx",
    "src/components/ui/magic-card.tsx",
    "src/components/ui/tweet-card.tsx",
    "src/components/ui/hero-video-dialog.tsx",
    "src/components/fancy/**",
    "src/hooks/use-elastic-line-events.ts",
  ]),
]);

export default eslintConfig;
