/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#ffcfc9",

          "secondary": "#bbabfc",

          "accent": "#53edaf",

          "neutral": "#272631",

          "base-100": "#2A344B",

          "info": "#5885E4",

          "success": "#169848",

          "warning": "#F59D05",

          "error": "#F81616",
        },
      },
    ]
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
