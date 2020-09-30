import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import React from 'react'
import { ThemeProvider } from 'styled-components'

import { default as GlobalStyle } from '@styles/globals'
import theme from '@styles/theme'

export default ({ children }) => (
  <ThemeProvider theme={theme}>
    <MuiThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
    </MuiThemeProvider>
  </ThemeProvider>
)
