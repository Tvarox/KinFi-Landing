/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#131416",
        },
        accent: {
          DEFAULT: "#FFA15A",
        },
        surface: {
          DEFAULT: "#1f2024",
        },
      },
      fontFamily: {
        sans: ['Cinzel', 'serif'],
        heading: ['Cormorant', 'serif'],
        body: ['Cinzel', 'serif'],
      },
    },
  },
  plugins: [],
};
