/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",

    "./node_modules/tailwind-datepicker-react/dist/**/*.js"
  ],
  theme: {
    extend: {
      height: {
        '128': '38rem',

      },
      width: {
        '135': '35rem',
        '150': '50rem',
      },
      boxShadow: {
        'nxl': 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
        'nx': 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0'
      }
    },

  },
  plugins: [

  ],

}