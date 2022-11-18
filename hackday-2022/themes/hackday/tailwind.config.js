/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./content/**/*.md",
    "./layouts/**/*.{html,md}",
    "./component-library/**/*.{html,md}",
    "./component-library/components/hero/*.html",
    "./themes/hackday/layouts/**/*.{html,md}",
    "./themes/hackday/content/**/*.md",
    "../../component-library/**/*.{html,md}",
    "../../component-library/components/hero/*.html",
    "../../content/**/*.md",
    "../../layouts/**/*.{html,md}",
    "../../themes/hackday/layouts/**/*.{html,md}",
    "../../themes/hackday/content/**/*.md"
  ],
  theme: {
    extend: {}
  },
  plugins: []
};
