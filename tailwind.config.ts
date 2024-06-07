// tailwind.config.ts
const { nextui } = require("@nextui-org/react");

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(calendar|button|slider|textarea).js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        light: {
          background: "#F5F7FB",
          box_bg: "#ffff",
          primary_darker: "#1A1E3A",
          card_bg: "#F0F4F9",
          primary: "#008DC0",
          primary_bg: "#00A858",
          text_primary: "#212121",
          grey: "#E4EBF3",
          border_lighter: "rgba(0, 0, 0, 0.1)",
          border: "#A39393",
        },
      },
      borderRadius: {
        "4xl": "2rem",
      },
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        noto: ["Noto Sans", "sans-serif"],
      },
    },
  },
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            primary: {
              DEFAULT: "#1A1E3A",
            },
          },
        },
        dark: {
          colors: {},
        },
      },
    }),
  ],
};
export default config;
