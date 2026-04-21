/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1F5A7A",   // Blue
        secondary: "#6BAF45", // Green
        accent: "#3A8FB7",    // Light Blue
        dark: "#000000",
        light: "#FFFFFF",
      },
      fontFamily: {
        sans: ["Inter", "Arial", "sans-serif"],
        heading: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
}