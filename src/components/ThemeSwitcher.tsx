import React from 'react'
import styled from 'styled-components'
import ThemeContext from '../style/Theme'
import { SunIcon } from '../assets/icons/SunIcon'
import { MoonIcon } from '../assets/icons/MoonIcon'
import { spaces, screenSizes, ThemeNames } from '../style/global'

const ThemeSwitcher = () => {
  return (
    <ThemeContext.Consumer>
      {(theme) => (
        <ThemeSwitcherContainer
          onClick={() =>
            theme.changeTheme(
              theme.name === ThemeNames.dark
                ? ThemeNames.light
                : ThemeNames.dark
            )
          }
        >
          {theme.name === ThemeNames.dark && <StyledSun color='' />}
          {theme.name === ThemeNames.light && <StyledMoon color='' />}
        </ThemeSwitcherContainer>
      )}
    </ThemeContext.Consumer>
  )
}

const ThemeSwitcherContainer = styled.div`
  /* position: absolute;
  right: ${spaces.regular};
  top: ${spaces.regular}; */

  margin: 0;
  padding: ${spaces.narrow};

  z-index: 10;
`

const StyledSun = styled(SunIcon)`
  height: 1.8rem;
  width: 1.8rem;
  fill: rgba(204, 204, 204, 0.25);

  @media (min-width: ${screenSizes.laptop}) {
    &:hover {
      fill: rgba(204, 204, 204, 1);
    }
  }
`

const StyledMoon = styled(MoonIcon)`
  height: 1.8rem;
  width: 1.8rem;
  fill: rgba(26, 26, 26, 0.25);

  @media (min-width: ${screenSizes.laptop}) {
    &:hover {
      fill: rgba(26, 26, 26, 1);
    }
  }
`

export default ThemeSwitcher
