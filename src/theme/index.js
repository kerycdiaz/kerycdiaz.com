import React from "react"
import { 
    createMuiTheme,
    ThemeProvider
} from '@material-ui/core/styles'

import palette from "./palette"

const theme = () => createMuiTheme({ ...palette })

export default ({ children }) => (
    <ThemeProvider theme={theme()}>
        {children}
    </ThemeProvider>
)
