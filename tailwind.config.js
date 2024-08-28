/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      textColor: {
        'secondaryTextColor': '#5A37E3',
        'primaryTextColor': '#111827',
        'topIconColor': '#828282',
        'disabledColor':'#CCCCCC'
      },
      backgroundColor: {
        'secondaryColor': '#5A37E3',
        'searcColor':'#F3F4F5'
      },
      colors: {
        'lineColor': '#111827',
        'secondaryColor': '#5A37E3',
        'disabledColor':'#CCCCCC'
      }
    },
  },
  plugins: [],
}

