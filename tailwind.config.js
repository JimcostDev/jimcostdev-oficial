/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        BACKGROUND_DESKTOP: "url('img/BACKGROUND_DESKTOP.webp')",
        BACKGROUND_MOBILE: "url('img/BACKGROUND_MOBILE.webp')",
        BACKGROUND_PROJECT: "url('img/BACKGROUND_PROJECT.jpg')",
      },
      backgroundColor: (theme) => ({
        ...theme("colors"),
        primary: "#03A9F4",
        secondary: "#F2FBFF",
        tertiary: "#00142E",
      }),
      textColor: {
        primary: "#03A9F4",
        secondary: "#F2FBFF",
        tertiary: "#00142E",
      },
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
      },
      typography: {
        h2: {
          color: 'var(--text-primary)', 
          fontSize: '1.25rem', 
          fontWeight: 'normal', 
          textAlign: 'center',
          paddingTop: '0.5rem', 
          paddingBottom: '1.25rem', 
          textTransform: 'uppercase',
        },
      },
      
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
};
