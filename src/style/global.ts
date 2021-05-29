export const fonts = {
  header: 'Acre',
  body: 'Acre',
}

export const fontSizes = {
  small: '0.75rem',
  regular: '1.0rem',
  medium: '1.2rem',
  large: '1.3rem',
  xlarge: '2.25rem',
}

export const spaces = {
  narrow: '0.75rem',
  regular: '1rem',
  wide: '1.45rem',
  large: '3rem',
  spacer: '7rem',
}

export const screenSizes = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktopS: '1920px',
  desktop: '2560px',
}

export const colors = {
  primary: '#aaf0d1',
  background: '#1a1a1a',
  backgroundTransp: 'rgba(26, 26, 26, 0.5)',
  text: '#ccc',
}

export enum ThemeNames {
  dark = 'dark',
  light = 'light',
}

export type ThemeType = {
  name: ThemeNames
  primary: string
  background: string
  text: string
  item: string
  firstShadow: string
  secondShadow: string
}

export type ThemesType = ThemeType[]

export const dark = {
  name: ThemeNames.dark,
  primary: '#aaf0d1',
  background: '#292929',
  text: '#eee',
  item: '#222',
  firstShadow: 'rgba(100, 100, 100, 0.4)',
  secondShadow: 'rgba(0, 0, 0, 0.4)',
}

export const light = {
  name: ThemeNames.light,
  primary: '#aaf0d1',
  background: '#ddd',
  text: '#333',
  item: '#eee',
  firstShadow: 'rgba(255, 255, 255, 0.6)',
  secondShadow: 'rgba(0, 0, 0, 0.3)',
}

export const themes: ThemesType = [light, dark]
