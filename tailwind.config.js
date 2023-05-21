/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        "3d": "-6px 13px 12px 0px rgba(0,0,0,0.75)",
      },

      animation: {
        wave: "wave 10s -3s linear infinite",
      },
      keyframes: {
        wave: {
          "0%": { transform: "translateX(0);" },
          "50%": { transform: "translateX(-25%);" },
          "100%": { transform: "translateX(-50%);" },
        },
      },
    },
  },
  plugins: [],
};
