import React from 'react'
import { connect } from 'react-redux'

import InfoHeader from '@components/InfoBox/InfoHeader'
import InfoText from '@components/InfoBox/InfoText'

import * as S from './styles'

const LandingPage = ({ navigatorPosition, navigatorShape }) => {
  return (
    <S.InfoBox className={`is-featured closed`}>
      <InfoHeader />
      <S.InfoWrapper>
        <InfoText />
      </S.InfoWrapper>
    </S.InfoBox>
  )
}

const mapStateToProps = (state) => {
  return {
    navigatorPosition: state.reducers.navigatorPosition,
    navigatorShape: state.reducers.navigatorShape,
  }
}

export default connect(mapStateToProps, null)(LandingPage)
