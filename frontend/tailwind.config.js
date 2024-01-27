/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/common/**/*.{js,ts,jsx,tsx,mdx}',
    './src/modules/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/react-tailwindcss-datepicker/dist/index.esm.js',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
      fontSize: {
        display: ['48px', '72px'],
        'title-1': ['28px', 'normal'],
        'title-2': ['22px', 'normal'],
      },
      screens: {
        '2xl': '1440px',
      },
      colors: {
        white: '#ffffff',
        line: '#050F42',
        green: {
          1: '#05F29A',
          2: '#85F29F',
          3: '#007A4D',
          4: '#6BFFC8',
          5: '#00AB6C',
          6: '#005D3B',
          7: '#00462C',
        },
        orange: {
          1: '#F26A1C',
          2: '#9A3800',
          3: '#FE9A60',
          4: '#DB7D47',
          5: '#B54200',
          6: '#8C3300',
        },
        red: {
          1: '#FF2E00',
          2: '#FF4747',
          3: '#BB3333',
          4: '#FF0000',
        },
        grey: {
          1: '#8D8F8F',
          2: '#4B4B4B',
          3: '#C5C5C5',
          4: '#C7C7C7',
          5: '#8B8B8B',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), ['prettier-plugin-tailwindcss']],
};
