import type { NextConfig } from "next";

// Static export: `npm run build` writes a plain HTML site to /out,
// which any Hostinger plan (including shared hosting) can serve.
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true, // /services/plantar-fasciitis/ -> .../index.html (works on Apache)
  images: { unoptimized: true }, // the image optimizer needs a Node server
};

export default nextConfig;
