/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textColor: {
        vprimary: "#bbb",
        vsecondary: "#4e3482",
      },
      fontFamily: {
        poppins: "'Poppins', sans-serif",
        exo: "'Exo', cursive",
      },
    },
  },
  plugins: [require("daisyui")],
};
