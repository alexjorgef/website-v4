export const COLORS = {
  text: {
    light: 'hsl(0deg, 0%, 10%)', // white
    dark: 'hsl(0deg, 0%, 100%)' // near-black
  },
  background: {
    light: 'hsl(0deg, 0%, 100%)', // white
    dark: 'hsl(250deg, 70%, 7%)' // navy navy blue
  },
  backgroundGradient: {
    light: 'linear-gradient(45deg, #3d3949, #6772a4)', // white
    dark: 'linear-gradient(45deg, #3d3949, #6772a4)' // navy navy blue
  },
  primary: {
    light: 'hsl(0deg, 100%, 59%)',
    dark: 'hsl(0deg, 100%, 59%)'
  },
  secondary: {
    light: 'hsl(250deg, 100%, 50%)', // Purplish-blue
    dark: 'hsl(190deg, 100%, 40%)' // Cyan
  },
  // Grays, scaling from least-noticeable to most-noticeable
  gray300: {
    light: 'hsl(0deg, 0%, 70%)',
    dark: 'hsl(0deg, 0%, 30%)'
  },
  gray500: {
    light: 'hsl(0deg, 0%, 50%)',
    dark: 'hsl(0deg, 0%, 50%)'
  },
  gray700: {
    light: 'hsl(0deg, 0%, 30%)',
    dark: 'hsl(0deg, 0%, 70%)'
  }
}

export const COLOR_MODE_KEY = 'color-mode'
export const INITIAL_COLOR_MODE_CSS_PROP = '--initial-color-mode'

export const SIZES = {
  breakpointPhone: '850px',
  breakpointTablet: '1024px',
  breakpointLaptop: '1200px',
  breakpointLarge: '60em',
  wrapperWidth: '65rem',
  width: '96%'
}
