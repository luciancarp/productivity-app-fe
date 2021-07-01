import { createGlobalStyle } from 'styled-components'
import { fontSizes, fonts, spaces, ThemeType } from './global'

import './typography.css'
import './destyle.css'

const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`


// custom ///


body,
  html,
  #root {
    font-family: ${fonts.body}, sans-serif;
    color:${(props) => props.theme.text};
    background-color: ${(props) => props.theme.background};
    font-size: ${fontSizes.regular};
    font-weight: 400;
    font-style: normal;
    // font-display: block; ///

    
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${fonts.header}, sans-serif;
    // font-weight: bold; ///
    // text-transform: uppercase; ///
    // font-style: normal; ///
  }

  h1 {
    font-size: ${fontSizes.xlarge};
    // text-align: center; ///
  }

  h2 { 
    font-size: ${fontSizes.large}
  }

  h3 {
    margin-bottom: ${spaces.regular};

    font-size: ${fontSizes.regular}
  }

  p {
    line-height: 1.5;
    margin-bottom: ${spaces.narrow};
  }
`

export default GlobalStyle
