import type { NextConfig } from "next";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

/**
 * Resolve the directory of this config file no matter how Next.js loads it
 * (CommonJS or ESM). Used to pin Turbopack's project root so the parent
 * lockfile is ignored.
 */
const projectRoot =
  typeof __dirname !== "undefined"
    ? __dirname
    : dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  reactCompiler: true,

  turbopack: {
    root: projectRoot,
  },

  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
      },
    ],
  },

  /** Strip dev-only console output from the production bundle. */
  compiler: {
    removeConsole:
      process.env.NODE_ENV === "production"
        ? { exclude: ["error", "warn"] }
        : false,
  },

  experimental: {
    /** Allow per-icon imports for these libraries to be tree-shaken. */
    optimizePackageImports: ["lucide-react", "motion", "@base-ui/react"],
  },

  async headers() {
    return [
      {
        source: "/:all*(svg|jpg|jpeg|png|webp|avif|ico|woff2)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
