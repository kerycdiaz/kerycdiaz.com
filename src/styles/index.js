import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import React from 'react'
import { ThemeProvider } from 'styled-components'

import theme from '@styles/theme'

const styles = ({ children }) => (
  <MuiThemeProvider theme={theme}>
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </MuiThemeProvider>
)
export default styles
