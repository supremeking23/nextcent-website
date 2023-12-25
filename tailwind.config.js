/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        nextcent_colors: {
          grey: {
            dark: "#4D4D4D",
            light: "#89939E",
            normal: "#717171",
          },
          grey_blue: "#ABBED1",
          silver: "#F5F7FA",
          black: "#263238",
          white: "#FFFFFF",
          primary: "#28CB8B",
          secondary: "#263238",
          info: "#2194f3"
        }
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"]
      },
      width: {
        custom100: "28.125rem"
      }
    },
  },
  plugins: [],
}

