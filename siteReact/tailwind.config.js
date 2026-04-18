/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter Variable', 'sans-serif'],
        dm: ['DM Sans Variable', 'sans-serif'],
        nunito: ['Nunito Variable', 'sans-serif'],
        sora: ['Sora Variable', 'sans-serif'],
        grotesk: ['Space Grotesk Variable', 'sans-serif'],
        geist: ['Geist Variable', 'sans-serif'],
        figtree: ['Figtree Variable', 'sans-serif'],
        jakarta: ['Plus Jakarta Sans Variable', 'sans-serif'],
        jetbrains: ['JetBrains Mono Variable', 'monospace'],
        syne: ['Syne Variable', 'sans-serif'],
        bebas: ['Bebas Neue', 'sans-serif'],
      },

      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },

      animation: {
        "fade-in": "fade-in 0.2s ease-out",
        "scale-in": "scale-in 0.2s ease-out",
      },
    },
  },

  plugins: [],
}