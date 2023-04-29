/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xl: { max: '1200px' },
      // => @media (max-width: 1200px)

      lg: { max: '1024px' },
      // => @media (max-width: 1024px)

      md: { max: '800px' },
      // => @media (max-width: 800px)

      sm: { max: '639px' },
      // => @media (max-width: 639px)

      xs: { max: '429px' },
      // => @media (max-width: 429px)
    },
    extend: {
      backgroundImage: {
        'desktop-bg': "url('./src/assets/images/Desktop.svg')",
      },
      backgroundPosition: {
        'top-3': 'center top 3rem',
      },
      backgroundSize: {
        mobileSize: '165%',
      },
    },
  },
  plugins: [],
};
