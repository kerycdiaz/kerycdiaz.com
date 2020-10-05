import { Link } from 'gatsby'
import React from 'react'
import CookieConsent from 'react-cookie-consent'
import { connect } from 'react-redux'

import ActionsBar from '@components/ActionsBar'
import InfoBar from '@components/InfoBar'
import InfoBox from '@components/InfoBox'
import Navigator from '@components/Navigator'
import { default as GlobalStyle } from '@styles/globals'
import { setNavigatorPosition, setNavigatorShape } from '@store/actions'

import * as S from './styles'

const Layout = ({ children, setNavigatorPosition, setNavigatorShape }) => {
  const linkOnClick = () => {
    setNavigatorPosition('is-aside')
    setNavigatorShape('closed')
  }

  return (
    <S.Layout>
      <GlobalStyle />
      {children}
      <Navigator />
      <ActionsBar />
      <InfoBar />
      <InfoBox />
      <CookieConsent
        enableDeclineButton
        location="bottom"
        buttonText="Aceptar"
        declineButtonText="Rechazar"
        cookieName="gatsby-gdpr-google-analytics"
        style={{ background: "#2d1e48" }}
        buttonStyle={{ color: "#2d1e48", background: '#fff', borderRadius: '5px' }}
        declineButtonStyle={{borderRadius: '5px'}}
      >
        <small>
          Esta web usa cookies operativas propias que tienen una pura finalidad 
          funcional y cookies de terceros (tipo analytics) que permiten conocer 
          sus hábitos de navegación para darle mejores servicios de información{' '}
          <Link to="/cookies-policy" onClick={linkOnClick}>
            Política de Cookies
          </Link>
        </small>
      </CookieConsent>
    </S.Layout>
  )
}

const mapDispatchToProps = {
  setNavigatorPosition,
  setNavigatorShape,
}

export default connect(null, mapDispatchToProps)(Layout)
