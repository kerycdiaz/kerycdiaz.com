import React from 'react'

import ActionsBar from '@components/ActionsBar'
import InfoBar from '@components/InfoBar'
import InfoBox from '@components/InfoBox'
import Navigator from '@components/Navigator'

import * as S from './styles'

const Layout = ({ children }) => {
  return (
    <S.Layout>
      {children}
      <Navigator />
      <ActionsBar />
      <InfoBar />
      <InfoBox />
    </S.Layout>
  )
}

export default Layout
