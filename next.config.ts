import type { NextConfig } from "next";

/**
 * GitHub Pages serves project sites from a subpath:
 *   https://<user>.github.io/<repo>/
 * Set GITHUB_PAGES=true in the Pages build workflow.
 * Leave unset for Vercel / local dev (site at domain root).
 */
const isGithubPages = process.env.GITHUB_PAGES === "true";
const repo = "roiroiter";
/** Override with NEXT_BASE_PATH="" when using a custom domain on GitHub Pages */
const basePath = isGithubPages
  ? (process.env.NEXT_BASE_PATH ?? `/${repo}`)
  : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  images: {
    // Required for static export — images are served as-is from /public/art
    unoptimized: true,
  },
};

export default nextConfig;
