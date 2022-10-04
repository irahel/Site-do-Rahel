/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily:{
      serif: ['Bitter', 'serif']
    },
    extend: {
      margin: {
        '15%': '15%',
      },
      colors: {
        'dark': '#10101A',
        'white': '#F7F7F7',
        'blue': '#a4c2f4',
      },
      keyframes: {
        scroll_2: {
          '0%': { transform: 'translateY(0)',
                  opacity: '1' },
          '25%': { opacity: '1' },
          '75%': { transform: 'translateY(0.75rem)',
            opacity: '0' },
          '100%': { transform: 'translateY(0)',
            opacity: '0', },
        },
      },
      animation: {
        'scroll': 'scroll_2 2s linear infinite',
      },
    },
  },
  plugins: [],
}
//#bebff4
//#d6bcee
//#ebbae4
//#fab9d7
//#ffbbc9
//#ffbfbb
//#ffcda7
//#f4d6a4