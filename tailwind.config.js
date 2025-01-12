module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Match your file structure
  ],
  theme: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar")],
  variants: {
    scrollbar: ["rounded"], // Optional: Enables rounded scrollbar styles
  },
};
