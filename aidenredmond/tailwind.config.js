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
            'white' : '#d7dcd0',
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
        transitionDelay: {
            '100ms': '100ms',
            '200ms': '200ms',
            '300ms': '300ms',
            '400ms': '400ms',
            '500ms': '500ms',
            '600ms': '600ms',
            '700ms': '700ms',
            '800ms': '800ms',
            '900ms': '900ms',
          },
    },
    screens: {
        xl: { max: "1279px" },
        lg: { max: "1023px" },
        md: { max: "767px" },
        sm: { max: "639px" },
    },
    plugins: [],
  }
}