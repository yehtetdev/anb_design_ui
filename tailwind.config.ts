import type { Config } from "tailwindcss";
import colors, { neutral, slate, transparent } from 'tailwindcss/colors'

const config: Config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '0rem',
        xs: '0rem',
        sm: '0rem',
        md: '0rem',
        lg: '2rem',
        xl: '4rem',
        '2xl': '4rem',
      },
      screens: {
        xs: '320px',
        sm: '575px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1400px',
      },
    },

    colors: {

      // default colors
      transparent: 'transparent',
      gray: colors.gray,
      slate: colors.slate,
      neutral: colors.neutral,
      indigo: colors.indigo,
      black: colors.black,
      white: colors.white,

      // Grenadier primary color palette
      primary: {
        50: '#fff4ec',
        100: '#ffe6d4',
        200: '#ffc9a7',
        300: '#ffa26f',
        400: '#ff7035',
        500: '#ff4a0e',
        600: '#df2b04',
        700: '#c81e06',
        800: '#9f1a0d',
        900: '#80180e',
        950: '#450805',
      },
    },
    
    letterSpacing:{
      tightest: '-.075em', 
      tighter: '-.050em', 
      tight: '-.025em', 
      normal: '.0', 
      wide: '.10em', 
      wider: '.50em',
      widest: '1.2em',  

    },

    extend: {
      keyframes: {
        // Add custom keyframes here
      },
      animation: {
        // Add custom animations here
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
