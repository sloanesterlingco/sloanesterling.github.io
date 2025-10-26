import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundColor: {
        titanium: "#080808", // black titanium base
      },
      colors: {
        titanium: "#080808",
      },
      fontFamily: {
        // TEMP — LuxeSculpt private futurist replacement comes next
        sans: ["ui-sans-serif", "system-ui"],
      },
      transitionTimingFunction: {
        "atmospheric": "cubic-bezier(.4,0,.2,1)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
};

export default config;
