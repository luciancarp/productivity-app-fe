import React from 'react'

import ThemeContext from '../style/Theme'
import { ThemeNames } from '../style/global'

import Button from './Button'

const ThemeSwitcher = () => {
  return (
    <ThemeContext.Consumer>
      {(theme) => (
        <Button
          text='🌙'
          onClick={() =>
            theme.changeTheme(
              theme.name === ThemeNames.dark
                ? ThemeNames.light
                : ThemeNames.dark
            )
          }
        />
      )}
    </ThemeContext.Consumer>
  )
}

export default ThemeSwitcher
