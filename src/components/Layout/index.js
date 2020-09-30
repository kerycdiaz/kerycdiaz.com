import React, { lazy, Suspense } from 'react'
import CookieConsent from 'react-cookie-consent'

import ActionsBar from '@components/ActionsBar'
import InfoBar from '@components/InfoBar'

import * as S from './styles'

const Navigator = lazy(() => import('../Navigator'))

const Layout = ({ children }) => {
  const isSSR = typeof window === 'undefined'

  return (
    <S.Layout>
      {children}
      {!isSSR && (
        <Suspense fallback={<div>Loading...</div>}>
          <Navigator />
        </Suspense>
      )}
      <ActionsBar />
      <InfoBar />
      {/*<Suspense fallback={renderLoader()}>
        <InfoBox />
      </Suspense>*/}
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
