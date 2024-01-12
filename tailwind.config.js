/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
        pink: '#FF4271',
        orange: '#ff7849',
        green: '#13ce66',
        purple: '#3F1577',
        yellow: '#F4D258',
        'gray-dark': '#273444',
        'gray-light': '#d3dce6',
    },
    extend: {
        fontFamily: {
            Vermin: ['Vermin'],
            Montserrat: ['Montserrat'],
        },
    },
},
  plugins: [],
}

