/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
      ],
    theme: {
      extend: {
        colors : {
            'black' : '#0f1109',
            'white' : '#DBDCD0',
            'green' : '#3C4B35',
            'blue' : '#2D7DD2',
            'pink' : '#FF5964'
        },
        animation: {
            'loop-scroll': 'loop-scroll 50s linear infinite',
        },
        keyframes: {
            'loop-scroll': {
                from: { transform: 'translateX(0)' },
                to: { transform: 'translateX(-100%)' },
            }
        },
    },
    plugins: [],
  }
}