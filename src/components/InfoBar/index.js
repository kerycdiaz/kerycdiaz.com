import React from 'react'

import avatar from '@assets/keryc-diaz.jpg'

import config from '@data/SiteConfig'

import TopMenu from './TopMenu'
import * as S from './styles'

const InfoBar = () => {
  return (
    <S.InfoBar>
      <S.AvatarLink to="/">
        <S.AvatarImg alt={config.infoTitle} src={avatar} />
      </S.AvatarLink>
      <S.Title>
        {config.infoTitle}
        <small>{config.infoTitleNote}</small>
      </S.Title>
      <TopMenu />
    </S.InfoBar>
  )
}

export default InfoBar
