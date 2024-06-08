import type { Config } from "tailwindcss";

const config: Config = {
  important: "#app",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "cat-latte-base": "#eff1f5",
      "cat-latte-mantle": "#e6e9ef",
      "cat-latte-crust": "#dce0e8",
      "cat-latte-text": "#4c4f69",
      "cat-latte-subtext-0": "#6c6f85",
      "cat-latte-subtext-1": "#5c5f77",
      "cat-latte-overlay-0": "#9ca0b0",
      "cat-latte-overlay-1": "#8c8fa1",
      "cat-latte-overlay-2": "#7c7f93",
      "cat-latte-surface-0": "#ccd0da",
      "cat-latte-surface-1": "#bcc0cc",
      "cat-latte-surface-2": "#acb0be",
      "cat-latte-rosewater": "#dc8a78",
      "cat-latte-flamingo": "#dd7878",
      "cat-latte-teal": "#179299",
      "cat-latte-sky": "#04a5e5",
      "cat-latte-sapphire": "#209fb5",
      "cat-latte-lavender": "#7287fd",
    },

    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
