import React, { lazy, Suspense } from 'react'
import CookieConsent from 'react-cookie-consent'

import * as S from './styles'

//import ActionsBar from '@components/ActionsBar'
//import InfoBar from '@components/InfoBar'
//import InfoBox from '@components/InfoBox'
//import Navigator from '@components/Navigator'

const ActionsBar = lazy(() => import('../ActionsBar'))
const InfoBar = lazy(() => import('../InfoBar'))
const InfoBox = lazy(() => import('../InfoBox'))
const Navigator = lazy(() => import('../Navigator'))

const Layout = ({ children }) => {
  const isSSR = typeof window === 'undefined'

  return (
    <S.Layout>
      {children}
      {!isSSR && (
        <Suspense fallback={<div />}>
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
              Este sitio utiliza cookies. Si continuas navegando, aceptas su
              uso. Puedes cambiar la configuración o desactivarlas en tu
              navegador. Más info.
            </small>
          </CookieConsent>
        </Suspense>
      )}
    </S.Layout>
  )
}

export default Layout
