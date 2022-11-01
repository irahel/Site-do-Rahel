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
        'card-project-hover': 'linear-gradient(0deg, rgba(16, 16, 26, 0.8), rgba(16, 16, 26, 0.8))',
        'neide-mini': 'linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/img/neide/neide-mini.jpg")',
        'trybe-mini': 'linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/img/trybe/trybe-mini.jpg")',
        'esports-mini': 'linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/img/esports/esports-mini.jpg")',
        'vc-mini': 'linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/img/vc/vc-mini.jpg")',
        'vc-max': 'linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/img/vc/vc-max.jpg")',
        'esports-max': 'linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/img/esports/esports-max.jpg")',
        'trybe-max': 'linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/img/trybe/trybe-max.jpg")',
        'neide-max-1': 'linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/img/neide/neide-max-1.jpg")',
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
        wiggle: {
          '0%, 100%': { transform: 'rotate(-9deg)' },
          '50%': { transform: 'rotate(9deg)' },
        }
      },
      animation: {
        'scroll': 'scroll_2 2s linear infinite',
        'wiggle': 'wiggle 2s ease-in-out infinite',
      },
      boxShadow: {
        'header': '0px 4px 14px  rgba(0, 0, 0, 0.25)',
      }
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