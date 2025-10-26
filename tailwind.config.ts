const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundColor: {
        titanium: "#080808",
      },
      colors: {
        titanium: "#080808",
      },
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui"],
      },
      transitionTimingFunction: {
        "atmospheric": "cubic-bezier(.4,0,.2,1)",
      },
    },
  },
  plugins: [] // ← MUST BE EMPTY LIKE THIS
};

export default config;
