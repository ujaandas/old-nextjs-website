import withMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const config = withMDX()({
  pageExtensions: ["ts", "js", "tsx", "jsx", "md", "mdx"],
  images: {
    domains: ["picsum.photos"],
  },
  output: "export",
  basePath: "/ujaandas.github.io",
  images: {
    unoptimized: true,
  },
});

export default config;
