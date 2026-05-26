/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#1f1b1d",
        sand: "#f8f3ec",
        clay: "#e7d7cc",
        blush: "#eac1b7",
        sage: "#a7b7a3",
        gold: "#c9a227",
        mist: "#f3ede6",
        midnight: "#2c2a30"
      },
      fontFamily: {
        display: ["Cormorant Garamond", "serif"],
        body: ["Sora", "sans-serif"]
      },
      boxShadow: {
        soft: "0 20px 60px rgba(26, 23, 20, 0.12)",
        lift: "0 14px 30px rgba(26, 23, 20, 0.12)"
      }
    }
  },
  plugins: []
}
