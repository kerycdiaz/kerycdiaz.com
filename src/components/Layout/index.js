import React from 'react'
import CookieConsent from 'react-cookie-consent'

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
      <CookieConsent
        location="bottom"
        buttonText="De Acuerdo"
        cookieName="gatsby-gdpr-google-analytics"
        style={{ background: '#000' }}
        buttonStyle={{ background: '#fff', color: '#000' }}
        expires={150}
      >
        <small>
          Este sitio utiliza cookies. Si continuas navegando, aceptas su uso.
          Puedes cambiar la configuración o desactivarlas en tu navegador. Más
          info.
        </small>
      </CookieConsent>
    </S.Layout>
  )
}

export default Layout
