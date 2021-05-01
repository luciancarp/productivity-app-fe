import React, { useState, useEffect } from 'react'
import { ThemeProvider as ThemeStyled } from 'styled-components'
import { light, dark, themes, ThemeNames, ThemeType } from './global'

type ContextType = {
  name: ThemeNames
  changeTheme: (themeName: ThemeNames) => void
}

const defaultState: ContextType = {
  name: ThemeNames.dark,
  changeTheme: (themeName: ThemeNames) => {
    console.log('Theme Provider required')
  },
}

const ThemeContext = React.createContext<ContextType>(defaultState)

type Props = {
  children?: React.ReactNode
}

const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState<ThemeType | undefined>(dark)

  const changeTheme = (themeName: ThemeNames) => {
    const newTheme = themes.find((theme) => theme.name === themeName)
    if (newTheme) {
      setTheme(newTheme)
      localStorage.setItem('theme', themeName)
    }
  }

  useEffect(() => {
    const localTheme = localStorage.theme

    if (localTheme) {
      const newTheme = themes.find((theme) => theme.name === localTheme)
      if (newTheme) {
        setTheme(newTheme)
      }
    } else if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: light)').matches
    )
      setTheme(light)
  }, [])

  let themeName = theme ? theme.name : ThemeNames.dark

  return (
    <ThemeStyled theme={theme}>
      <ThemeContext.Provider
        value={{
          name: themeName,
          changeTheme: changeTheme,
        }}
      >
        {children}
      </ThemeContext.Provider>
    </ThemeStyled>
  )
}

export default ThemeContext

export { ThemeProvider }
