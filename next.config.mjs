import withMDX from "@next/mdx";

const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const config = withMDX()({
  assetPrefix: isProd ? "./" : undefined,
  swcMinify: true,
  pageExtensions: ["ts", "js", "tsx", "jsx", "md", "mdx"],
  images: {
    domains: ["picsum.photos"],
  },
  output: "export",
  // basePath: "/ujaandas.github.io",
  images: {
    unoptimized: true,
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.mdx?$/,
      use: [
        {
          loader: "@mdx-js/loader",
          /** @type {import('@mdx-js/loader').Options} */
          options: {
            /* jsxImportSource: …, otherOptions… */
          },
        },
      ],
    });

    return config;
  },
});

export default config;
