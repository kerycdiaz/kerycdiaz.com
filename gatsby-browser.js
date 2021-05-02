import React from 'react'

import { default as ReduxWrapper } from './src/store'
import { default as MaterialUiWrapper } from './src/styles'

require('prismjs/themes/prism-okaidia.css')

export const wrapRootElement = ({ element }) => (
  <ReduxWrapper>
    <MaterialUiWrapper>{element}</MaterialUiWrapper>
  </ReduxWrapper>
)
