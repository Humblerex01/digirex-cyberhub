/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",      // ✅ App Router (your page.js lives here)
    "./pages/**/*.{js,ts,jsx,tsx}",    // ✅ If you still use Pages Router anywhere
    "./components/**/*.{js,ts,jsx,tsx}" // ✅ Shared components
  ],
  theme: {
    extend: {
      fontFamily: {
        metropoli: ["Metropoli", "sans-serif"],
      },
    },
  },
  plugins: [],
};
