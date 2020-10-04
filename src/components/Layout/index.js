import { Link } from 'gatsby'
import React from 'react'
import CookieConsent from 'react-cookie-consent'
import { connect } from 'react-redux'

import ActionsBar from '@components/ActionsBar'
import InfoBar from '@components/InfoBar'
import InfoBox from '@components/InfoBox'
import Navigator from '@components/Navigator'

import { setNavigatorPosition, setNavigatorShape } from '@store/actions'

import * as S from './styles'

const Layout = ({ children, setNavigatorPosition, setNavigatorShape }) => {
  const linkOnClick = () => {
    setNavigatorPosition('is-aside')
    setNavigatorShape('closed')
  }

  return (
    <S.Layout>
      {children}
      <Navigator />
      <ActionsBar />
      <InfoBar />
      <InfoBox />
      <CookieConsent
        enableDeclineButton
        location="bottom"
        buttonText="De Acuerdo"
        declineButtonText="Rechazar"
        cookieName="gatsby-gdpr-google-analytics"
        style={{ background: "#2d1e48" }}
        buttonStyle={{ color: "#2d1e48", background: '#fff', borderRadius: '5px' }}
        declineButtonStyle={{borderRadius: '5px'}}
      >
        <small>
          Utilizamos cookies propias y de terceros para mejorar la experiencia
          de navegación. Si continúa navegando, consideramos que acepta su uso.
          Puede obtener más información en nuestra{' '}
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
