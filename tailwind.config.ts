const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      animation: {
  'pulse-slow': 'pulse 2.5s infinite',
},
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
  plugins: []
};

export default config;
