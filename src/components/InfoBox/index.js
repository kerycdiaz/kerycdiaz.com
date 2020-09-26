import React from 'react'
import { connect } from 'react-redux'

import InfoFooter from './InfoFooter'
import InfoHeader from './InfoHeader'
import InfoMenu from './InfoMenu'
import InfoText from './InfoText'
import SocialIcons from './SocialIcons'
import * as S from './styles'

const InfoBox = ({ navigatorPosition, navigatorShape }) => {
  return (
    <S.InfoBox
      className={`${navigatorPosition ? navigatorPosition : ''} 
            ${navigatorShape ? navigatorShape : ''}`}
    >
      <InfoHeader />
      <S.InfoWrapper>
        <InfoText />
        <SocialIcons />
        <InfoMenu />
        <InfoFooter />
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

export default connect(mapStateToProps, null)(InfoBox)
