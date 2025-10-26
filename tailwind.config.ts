extend: {
  animation: {
    'pulse-slow': 'pulse 2.5s infinite',
    'biomech-scan': 'biomechScan 2.5s ease-out forwards',
  },
  keyframes: {
    biomechScan: {
      '0%': { opacity: 0, transform: 'translateY(40px)' },
      '50%': { opacity: 1 },
      '100%': { opacity: 1, transform: 'translateY(0)' },
    },
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
    atmospheric: "cubic-bezier(.4,0,.2,1)",
  },
},
