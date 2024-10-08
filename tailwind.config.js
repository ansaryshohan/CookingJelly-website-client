/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        primaryBgColor: "#f8f4eacc",
        secondaryBgColor:"#E1D7C6",
      },
      textColor: {
        primaryColor: "#000000",
        secondaryColor: "#579BB1",
      },
    },
  },
  plugins: [require("daisyui")],
};
