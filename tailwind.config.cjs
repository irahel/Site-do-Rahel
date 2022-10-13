/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  variants: {
    width: ["responsive", "hover", "focus"]
  },
  theme: {
    fontFamily:{
      serif: ['Bitter', 'serif']
    },
    extend: {
      backgroundImage: {
        'card-project': 'linear-gradient(0deg, #10101A 65%, rgba(16, 16, 26, 0) 100%)',
        'neide-mini': 'linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/img/neide/neide-mini.png")',
        'trybe-mini': 'linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/img/trybe/trybe-mini.png")',
        'esports-mini': 'linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/img/esports/esports-mini.png")',
        'vc-mini': 'linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/img/vc/vc-mini.png")',
        'vc-max': 'linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/img/vc/vc-max.png")',
        'esports-max': 'linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/img/esports/esports-max.png")',
        'trybe-max': 'linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/img/trybe/trybe-max.png")',
        'neide-max-1': 'linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/img/neide/neide-max-1.png")',
        'neide-max-2': 'linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/img/neide/neide-max-2.png")',
        'neide-max-3': 'linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/img/neide/neide-max-3.png")',
        },
      margin: {
        '15%': '15%',
        '50%': '50%',
      },
      colors: {
        'dark': '#10101A',
        'white': '#F7F7F7',
        'blue': '#a4c2f4',
      },
      transitionProperty: {
        'width': 'width'
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
  plugins: [
    require('@tailwindcss/line-clamp'),
    // ...
  ],
}
//#bebff4
//#d6bcee
//#ebbae4
//#fab9d7
//#ffbbc9
//#ffbfbb
//#ffcda7
//#f4d6a4