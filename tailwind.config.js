/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1F2937",
        secondary: "#2ecc71",
        accent: "#e74c3c",
        "text-white": "#fff",
        "text-dark": "#9ca3af",
      },
    },
  },
  plugins: [],
};
