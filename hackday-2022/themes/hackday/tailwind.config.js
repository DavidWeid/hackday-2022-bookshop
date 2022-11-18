/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./content/**/*.md",
    "./layouts/**/*.{html,md}",
    "./component-library/**/*.{html,md}",
    "./themes/hackday/layouts/**/*.{html,md}",
    "./themes/hackday/content/**/*.md",
    "../../component-library/**/*.{html,md}",
    "../../content/**/*.md",
    "../../layouts/**/*.{html,md}",
    "../../themes/hackday/layouts/**/*.{html,md}",
    "../../themes/hackday/content/**/*.md"
  ],
  theme: {
    extend: {
      boxShadow: {
        DEFAULT: "0px 4px 14px 0 rgba(0, 0, 0, 0.25)",
        xs: "0 2px 4px 0 rgba(0, 0, 0, 0.25)",
        sm: "0 3px 4px 1px rgba(0, 0, 0, 0.25)",
        dark: "0px 4px 14px 0 rgba(0, 0, 0, 0.5)",
        "sm-light": "0 3px 4px 0 rgba(0, 0, 0, 0.10)",
        "md-dark": "0 4px 6px 0 rgba(200, 200, 200, 0.5)",
        "md-light": "0 8px 8px 0 rgba(0, 0, 0, 0.07)"
      },
      spacing: {
        sm: "0.5rem",
        md: "1rem",
        lg: "1.5rem",
        xl: "3rem",
        // NOTE: In-between sizes
        "1-": "-.25rem",
        4.5: "1.125rem", // 18px
        15: "3.75rem", // 60px
        17: "4.25rem", // 68px
        18: "4.5rem", // 72px
        22: "5.5rem", // 88px
        30: "7.5rem", // 120px
        33: "8.25rem", // 132px
        74: "18.5rem", // 296px
        108: "27rem" // 432px
      }
    },
    colors: {
      primary: {
        DEFAULT: "#632ca6",
        field: "#0050c8",
        partner: "#0096aa"
      },
      neue: "#7700ff",
      secondary: "#beaaff",
      transparent: "transparent",
      current: "currentColor",
      white: colors.white,
      black: colors.black,
      blue: {
        DEFAULT: "#56ccf24d",
        20: "#56ccf233",
        50: "#56ccf280",
        60: "#2F80ED"
      },
      green: {
        DEFAULT: "#6FCF974D",
        20: "#6FCF9733",
        50: "#6FCF9780"
      },
      purple: {
        DEFAULT: "#34005e",
        10: "#632CA61A",
        15: "#34005e26",
        20: "#7463e133",
        30: "#7463e14d",
        50: "#7463e180",
        55: "#C887FF40"
      },
      grey: {
        DEFAULT: "#c7c7c7",
        5: "#F6F6F6",
        10: "#AEAEAE",
        15: "#eeeeee",
        20: "#e7e7e7",
        30: "#555555",
        50: "#969696",
        60: "#F9F9F9",
        70: "#F6F6F6"
      },
      orange: {
        DEFAULT: "#F2994A4D",
        20: "#F2994A33",
        50: "#F2994A80"
      },
      teal: {
        DEFAULT: "#82f0d7",
        15: "#82f0d726",
        20: "#82f0d740",
        25: "#9BDCFF40"
      }
    },
    fontSize: {
      200: "200px",
      120: "120px",
      94: "94px",
      68: "68px",
      64: "64px",
      60: "60px",
      58: "58px",
      48: "48px",
      46: "46px",
      44: "44px",
      42: "42px",
      40: "40px",
      38: "38px",
      36: "36px",
      34: "34px",
      32: "32px",
      30: "30px",
      28: "28px",
      26: "26px",
      24: "24px",
      22: "22px",
      20: "20px",
      18: "18px",
      16: "16px",
      14: "14px",
      12: "12px",
      10: "10px"
    },
    lineHeight: {
      200: "200px",
      120: "120px",
      94: "94px",
      68: "68px",
      64: "64px",
      60: "60px",
      58: "58px",
      52: "52px",
      50: "50px",
      48: "48px",
      46: "46px",
      44: "44px",
      42: "42px",
      40: "40px",
      38: "38px",
      36: "36px",
      34: "34px",
      32: "32px",
      30: "30px",
      28: "28px",
      26: "26px",
      24: "24px",
      22: "22px",
      20: "20px",
      18: "18px",
      16: "16px",
      14: "14px"
    },
    screens: {
      all: "0px",
      mobile: "375px",
      "mobile-lg": "576px",
      tablet: "768px",
      "tablet-lg": "1024px",
      desktop: "1200px",
      "desktop-lg": "1400px"
    }
  },
  plugins: []
};
