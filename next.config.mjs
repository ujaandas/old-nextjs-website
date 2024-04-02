import withMDX from "@next/mdx";

const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const config = withMDX()({
  assetPrefix: isProd ? "./" : undefined,
  pageExtensions: ["ts", "js", "tsx", "jsx", "md", "mdx"],
  images: {
    domains: ["picsum.photos"],
  },
  output: "export",
  // basePath: "/ujaandas.github.io",
  images: {
    unoptimized: true,
  },
});

export default config;
