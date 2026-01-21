/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-navy": "#0B2A3F",
        "brand-sky": "#1F4E79",
        "brand-light": "#F5F7FA",
        "brand-dark": "#1F2937",
        "brand-red": "#f00c0cff",
      },
    },
  },
};

export default config;
