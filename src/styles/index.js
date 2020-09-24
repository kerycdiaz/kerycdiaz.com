import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import React from 'react'
import { ThemeProvider } from 'styled-components'

import { default as GlobalStyle } from '@styles/globals'
import theme from '@styles/theme'

export default ({ children }) => (
  <MuiThemeProvider theme={theme}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  </MuiThemeProvider>
)