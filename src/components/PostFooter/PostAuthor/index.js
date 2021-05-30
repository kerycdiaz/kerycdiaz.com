import React from 'react'

import avatar from '@assets/keryc-diaz.jpg'

import SocialIcons from '@components/InfoBox/SocialIcons'

import config from '@data/SiteConfig'

import * as S from './styles'

const PostAuthor = ({ author }) => {
  return (
    <S.PostAuthor>
      <S.PostAvatar src={avatar} alt={config.siteMetadata.author.name} />
      <S.PostBox dangerouslySetInnerHTML={{ __html: author.html }} />
      <S.SocialIcons>
        Sígueme:
        <SocialIcons />
      </S.SocialIcons>
    </S.PostAuthor>
  )
}

export default PostAuthor
