module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: "'League Spartan', sans-serif",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
