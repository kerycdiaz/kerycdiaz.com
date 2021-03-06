import { Link } from 'gatsby'
import React from 'react'
import CookieConsent from 'react-cookie-consent'
import { connect } from 'react-redux'

import { setNavigatorPosition, setNavigatorShape } from '@store/actions'

import { default as GlobalStyle } from '@styles/globals'

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
      <CookieConsent
        enableDeclineButton
        location="bottom"
        buttonText="Aceptar"
        declineButtonText="Rechazar"
        cookieName="gatsby-gdpr-google-analytics"
        style={{ background: '#2d1e48' }}
        buttonStyle={{
          color: '#2d1e48',
          background: '#fff',
          borderRadius: '5%',
        }}
        declineButtonStyle={{ borderRadius: '5%' }}
      >
        <small>
          Esta web usa cookies operativas propias que tienen una pura finalidad
          funcional y cookies de terceros (tipo analytics) que permiten conocer
          sus hábitos de navegación para darle mejores servicios de información{' '}
          <Link to="/politica-de-cookies" onClick={linkOnClick}>
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
