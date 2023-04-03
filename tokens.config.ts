import { defineTheme } from 'pinceau'

export default defineTheme({
  color: {
    text: {
      dark: '#374151',
      light: '#d6d3d1',
    },
    primary: {
      darkest: {
        value: '#0d9488',
      },
      darker: {
        value: '#11998e',
      },
      dark: {
        value: '#10b981',
      },
      light: {
        value: '#38ef7d',
      },
      lightest: {
        value: '#23e75e',
      },
    },
  },
  docus: {
    page: {
      maxWidth: '90rem',
    },
    header: { height: '104px' },
    footer: { height: '80px' },
  },
  prose: {
    ul: {
      listStyleType: 'none',
      padding: 0,
    },
    a: {
      fontWeight: '400',
      borderStyle: {
        default: 'none',
        hover: 'none',
      },
    },
    h1: {
      fontSize: '2.25rem',
      fontWeight: '600',
      marginBottom: '0.88em',
      marginTop: '0',
      lineHeight: '1.5',
    },
    h2: {
      fontSize: '1.5em',
      fontWeight: 700,
      lineHeight: 1.3333333,
      marginBottom: '1em',
      marginTop: '2em',
    },
    h3: {
      fontSize: '1.3em',
      fontWeight: 700,
      lineHeight: 1.5,
      marginBottom: '0.8em',
      marginTop: '1.5em',
    },
    p: {
      margin: '1rem 0',
      lineHeight: 1.75,
    },
  },
  backdrop: {
    filter: 'blur(2px)',
  },
})
