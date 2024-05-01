/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    darkMode: "media",
    extend: {},
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
