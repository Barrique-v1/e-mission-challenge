// tailwind.config.cjs
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        cyan: {
          DEFAULT: 'hsl(180, 66%, 49%)',
          light: 'hsl(180, 66%, 59%)',
        },
        darkViolet: 'hsl(257, 27%, 26%)',
        red: 'hsl(0, 87%, 67%)',
        gray: 'hsl(0, 0%, 75%)',
        grayishViolet: 'hsl(257, 7%, 63%)',
        veryDarkBlue: 'hsl(255, 11%, 22%)',
        veryDarkViolet: 'hsl(260, 8%, 14%)',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        base: '18px',
      },
      screens: {
        mobile: '375px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        desktop: '1440px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

