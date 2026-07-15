/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#FFFAFB",
        paperWarm: "#FFF6F8",
        ink: "#34282D",
        inkMuted: "#76636B",
        blush: "#F7D4DF",
        blushStrong: "#D66F91",
        pinkSoft: "#F7D4DF",
        pinkMedium: "#EBA8BC",
        pinkStrong: "#D66F91",
        pinkDeep: "#B84F74",
        mint: "#F2FAF6",
        mintStrong: "#BFDCCF",
        petal: "#FFF0F4",
        line: "rgba(184, 79, 116, 0.16)",
        white: "#FFFFFF",
        sand: "#FFFAFB",
        clay: "#FFF6F8",
        sage: "#F2FAF6",
        mist: "#FFF0F4",
        midnight: "#34282D"
      },
      fontFamily: {
        display: ["Cormorant Garamond", "serif"],
        body: ["Sora", "sans-serif"]
      },
      boxShadow: {
        soft: "0 20px 60px rgba(184, 79, 116, 0.10)",
        lift: "0 14px 30px rgba(184, 79, 116, 0.12)",
        print: "0 14px 40px rgba(184, 79, 116, 0.08)"
      }
    }
  },
  plugins: []
}
