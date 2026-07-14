/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#FBF7F1",
        paperWarm: "#F4ECE2",
        ink: "#231C20",
        inkMuted: "#6F6268",
        blush: "#F2CDD8",
        blushStrong: "#E7AFC0",
        mint: "#CDE5D8",
        mintStrong: "#9FC9B4",
        petal: "#FFF0F4",
        line: "rgba(35, 28, 32, 0.14)",
        white: "#FFFFFF",
        sand: "#FBF7F1",
        clay: "#F4ECE2",
        sage: "#CDE5D8",
        mist: "#FFF0F4",
        midnight: "#231C20"
      },
      fontFamily: {
        display: ["Cormorant Garamond", "serif"],
        body: ["Sora", "sans-serif"]
      },
      boxShadow: {
        soft: "0 20px 60px rgba(35, 28, 32, 0.10)",
        lift: "0 14px 30px rgba(35, 28, 32, 0.12)",
        print: "0 14px 40px rgba(35, 28, 32, 0.08)"
      }
    }
  },
  plugins: []
}
