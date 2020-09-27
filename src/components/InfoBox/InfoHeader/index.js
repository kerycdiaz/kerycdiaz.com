import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import React from 'react'
import { connect } from 'react-redux'

import avatar from '@assets/keryc-diaz.jpg'

import config from '@data/SiteConfig'

import { setNavigatorPosition, setNavigatorShape } from '@store/actions'

import * as S from './styles'

const InfoHeader = ({ setNavigatorPosition, setNavigatorShape }) => {
  const expandOnClick = () => {
    setNavigatorShape('closed')
  }

  return (
    <S.InfoHeader>
      <S.AvatarLink to="/" title="back to Home page">
        <S.AvatarImg>
          <img src={avatar} alt="" />
        </S.AvatarImg>
      </S.AvatarLink>
      <S.Title>
        {config.infoTitle.replace(/ /g, '\u00a0')}
        <small>{config.infoTitleNote}</small>
      </S.Title>
      <S.ExpandButtom
        aria-label="Expand the box"
        onClick={expandOnClick}
        title="Expand the box"
      >
        <ExpandMoreIcon />
      </S.ExpandButtom>
    </S.InfoHeader>
  )
}

const mapStateToProps = (state) => {
  return {
    navigatorPosition: state.reducers.navigatorPosition,
    navigatorShape: state.reducers.navigatorShape,
  }
}

const mapDispatchToProps = {
  setNavigatorPosition,
  setNavigatorShape,
}

export default connect(mapStateToProps, mapDispatchToProps)(InfoHeader)
