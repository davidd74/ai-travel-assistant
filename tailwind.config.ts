import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
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
          box_bg: "#FFFFFF",
          primary: "#00AA6C",
          primary_bg: "#00A858",
          text_primary: "#212121",
        },
      },
      borderRadius: {
        "4xl": "2rem",
      },
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
