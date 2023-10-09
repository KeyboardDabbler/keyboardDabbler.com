import { defineConfig } from 'windicss/helpers'
import typography from 'windicss/plugin/typography'

export default defineConfig({
  plugins: [
    require('windicss/plugin/forms'),
    typography({
      // Turns text color to light, when dark mode enabled. Default = false
      dark: true,
    }),
  ],
  shortcuts: {
    'bg-clip-text': {
      '-webkit-background-clip': 'text',
      'background-clip': 'text',
    },
  },
  theme: {
    extend: {
      colors: {
        backg: '#111828',
        forg: '#202938',
        yellow1: '#F4CF44',
        yellow2: '#B5C239',
        yellow3: '#77B23E',
        yellow4: '#2F9E49',
        yellow5: '#008954',
        yellow6: '#00725D',
        blue: '#00D5FF',
        gray: {
          800: '#202938',
        },
      },
      animation: {
        fadeIn: 'fadeIn 200ms ease-in forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      fontFamily: {
        sans: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
        header: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      },
      typography: theme => ({
        DEFAULT: {
          css: {
            maxWidth: '100%',
            lineHeight: 1.3,
            img: {
              height: null,
            },
            a: {
              color: 'inherit',
              fontWeight: 400,
              textDecoration: 'none',
            },
            h1: {
              color: theme('colors.gray.800'),
              fontWeight: '600',
              fontFamily: theme('fontFamily.header'),
              lineHeight: 1.3,
            },
            h2: {
              color: theme('colors.gray.800'),
              fontFamily: theme('fontFamily.header'),
            },
            h3: {
              color: theme('colors.gray.800'),
              fontFamily: theme('fontFamily.header'),
            },
            h4: {
              color: theme('colors.gray.800'),
              fontWeight: '600',
              fontSize: '1.5rem',
              lineHeight: '2rem',
              fontFamily: theme('fontFamily.header'),
              textDecoration: 'underline',
            },
            blockquote: {
              fontWeight: '400',
            },
          },
        },
        xl: {
          css: {
            h1: {
              lineHeight: 1.3,
            },
          },
        },
      }),
    },
  },
})