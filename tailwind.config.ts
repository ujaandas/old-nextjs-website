import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
  important: "#app",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      ...colors,
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
      "cat-mocha-crust": "#11111b",
      "cat-mocha-mantle": "#181825",
      "cat-mocha-base": "#1e1e2e",
      "cat-mocha-rosewater": "#f5e0dc",
      "cat-mocha-flamingo": "#f2cdcd",
      "cat-mocha-pink": "#f5c2e7",
      "cat-mocha-mauve": "#cba6f7",
      "cat-mocha-red": "#f38ba8",
      "cat-mocha-maroon": "#eba0ac",
      "cat-mocha-peach": "#fab387",
      "cat-mocha-yellow": "#f9e2af",
      "cat-mocha-green": "#a6e3a1",
      "cat-mocha-teal": "#94e2d5",
      "cat-mocha-sky": "#89dceb",
      "cat-mocha-sapphire": "#74c7ec",
      "cat-mocha-blue": "#89b4fa",
      "cat-mocha-lavender": "#b4befe",
      "cat-mocha-text": "#cdd6f4",
      "cat-mocha-subtext-1": "#bac2de",
      "cat-mocha-subtext-0": "#a6adc8",
      "cat-mocha-overlay-2": "#9399b2",
      "cat-mocha-overlay-1": "#7f849c",
      "cat-mocha-overlay-0": "#6c7086",
      "cat-mocha-surface-2": "#585b70",
      "cat-mocha-surface-1": "#45475a",
      "cat-mocha-surface-0": "#313244",
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
