import React from 'react'

import avatar from '@assets/keryc-diaz.jpg'

import config from '@data/SiteConfig'

import * as S from './styles'

const PostAuthor = ({ author }) => {
  return (
    <S.PostAuthor>
      <S.PostAvatar src={avatar} alt={config.siteMetadata.author.name} />
      <S.PostBox dangerouslySetInnerHTML={{ __html: author.html }} />
    </S.PostAuthor>
  )
}

export default PostAuthor
