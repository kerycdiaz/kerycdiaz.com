import React from "react"

import { default as ReduxWrapper } from './src/store'
import { default as MaterialUiWrapper } from './src/theme'

export const wrapRootElement = ({ element }) => ( 
    <ReduxWrapper>
        <MaterialUiWrapper>
            {element}
        </MaterialUiWrapper>
    </ReduxWrapper>
)
