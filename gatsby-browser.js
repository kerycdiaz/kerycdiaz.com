import React from 'react'

import { default as ReduxWrapper } from './src/store'
import { default as MaterialUiWrapper } from './src/styles'

export const wrapRootElement = ({ element }) => (
  <ReduxWrapper>
    <MaterialUiWrapper>{element}</MaterialUiWrapper>
  </ReduxWrapper>
)

export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `Esta aplicación ha sido actualizada.` +
      `¿Deseas recargar para mostrar la última versión?`
  )
  if (answer === true) {
    window.location.reload()
  }
}
