const FONT_WEIGHT = {
  BOLD: 700,
  NORMAL: 400
}

export default {
  font: {
    family: 'Roboto Condensed',
    normal: FONT_WEIGHT.NORMAL,
    bold: FONT_WEIGHT.BOLD
  },
  colors: {
    primaryYellow: '#ffe600',
    primaryBlue: '#3483fa',
    textDark: '#333333',
    text: '#666666',
    highlight: '#999999',
    background: '#eeeeee',
    lightGray: '#dddddd'
  },
  typography: {
    headline1: {
      fontWeight: FONT_WEIGHT.BOLD,
      fontSize: '46px',
      lineHeight: '60px'
    },
    headline4: {
      fontWeight: FONT_WEIGHT.BOLD,
      fontSize: '24px',
      lineHeight: '34px'
    },
    large: {
      fontWeight: FONT_WEIGHT.NORMAL,
      fontSize: '18px',
      lineHeight: '25px'
    },
    medium: {
      fontWeight: FONT_WEIGHT.NORMAL,
      fontSize: '16px',
      lineHeight: '24px'
    },
    mediumBold: {
      fontWeight: FONT_WEIGHT.BOLD,
      fontSize: '16px',
      lineHeight: '24px'
    },
    small: {
      fontWeight: FONT_WEIGHT.NORMAL,
      fontSize: '14px',
      lineHeight: '21px'
    },
    smallBold: {
      fontWeight: FONT_WEIGHT.BOLD,
      fontSize: '14px',
      lineHeight: '21px'
    },
    extraSmall: {
      fontWeight: FONT_WEIGHT.NORMAL,
      fontSize: '12px',
      lineHeight: '18px'
    },
    extraSmallBold: {
      fontWeight: FONT_WEIGHT.BOLD,
      fontSize: '12px',
      lineHeight: '18px'
    }
  }
} as const
