import React from 'react'

import config from '@data/SiteConfig'

import * as S from './styles'

const SocialIcons = () => {
  const items = config.infoSocialLinks
  return (
    <S.SocialIcons>
      {items.map((item) => {
        const regex = /^https?:\/\/([^\s$.?#]+).[^\s]*$/
        let social_name = regex.exec(item.url)[1]
        return (
          <S.IconLink
            key={social_name}
            title={social_name}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <S.IconSvg component={item.icon} />
          </S.IconLink>
        )
      })}
    </S.SocialIcons>
  )
}

export default SocialIcons
