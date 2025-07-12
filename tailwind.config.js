/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,astro}"],
  theme: {
    extend: {
      fontFamily: {
        grotesk: ['"grotesk"', "ui-sans-serif", "system-ui"],
        dmsans: ['"dm-sans"', "ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [],
};
