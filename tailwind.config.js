/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ember: {
          50: "#fff7ed",
          100: "#ffedd5",
          200: "#fed7aa",
          300: "#fdba74",
          400: "#fb923c",
          500: "#f97316",
          600: "#ea580c",
          700: "#c2410c",
          800: "#9a3412",
          900: "#7c2d12",
        },
        coal: {
          50: "#f6f6f7",
          100: "#e2e2e5",
          800: "#1b1b1f",
          900: "#121215",
          950: "#0a0a0c",
        },
      },
      fontFamily: {
        display: ["'Bricolage Grotesque'", "system-ui", "sans-serif"],
        sans: ["'Plus Jakarta Sans'", "system-ui", "sans-serif"],
      },
      keyframes: {
        flicker: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.82" },
        },
        "marquee-x": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        flicker: "flicker 3s ease-in-out infinite",
        marquee: "marquee-x 28s linear infinite",
      },
    },
  },
  plugins: [],
};
