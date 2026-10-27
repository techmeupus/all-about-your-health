import type { NextConfig } from "next";

// STATIC_EXPORT=1 npm run build -> plain HTML site in /out (shared hosting, see deploy.yml).
// Plain `npm run build` -> normal Next.js server build for `npm start` (Hostinger Node.js hosting).
const staticExport = process.env.STATIC_EXPORT === "1";

const nextConfig: NextConfig = {
  trailingSlash: true,
  ...(staticExport && {
    output: "export",
    images: { unoptimized: true }, // the image optimizer needs a Node server
  }),
};

export default nextConfig;
