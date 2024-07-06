import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        "white-1": "#EBF5EE",
        "white-2": "#EAFFFD",
        "white-3": "#FFF8F0",
        "white-4": "#6FD08C",
        "white-5": "#F6FFF8",
        "green-1":"#85D831",
        "green-2": "#67D08C",
        "green-3": "#0CCE6B",
        "black-1": "#1F322B",
        "black-2": "#394053",
        "black-3": "#070D0C",
        "black-4": "#1F322B"
      },
      screens: {
        xs: "400px"
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require('daisyui')],
} satisfies Config

export default config
