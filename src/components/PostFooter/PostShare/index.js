import React from 'react'
import {
  FacebookShareButton,
  WhatsappShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  LinkedinIcon,
} from 'react-share'

import config from '@data/SiteConfig'

import * as S from './styles'

const PostShare = ({ classes, slug, title, subTitle }) => {
  const url = config.siteMetadata.siteUrl + slug

  const iconSize = 36

  return (
    <S.PostShare>
      <S.PostLabel>SHARE</S.PostLabel>
      <S.PostLinks>
        <FacebookShareButton url={url} quote={`${title} - ${subTitle}`}>
          <FacebookIcon round size={iconSize} />
        </FacebookShareButton>
        <TwitterShareButton url={url} title={title}>
          <TwitterIcon round size={iconSize} />
        </TwitterShareButton>
        <LinkedinShareButton url={url} title={title} description={subTitle}>
          <LinkedinIcon round size={iconSize} />
        </LinkedinShareButton>
        <WhatsappShareButton url={url} title={title}>
          <WhatsappIcon round size={iconSize} />
        </WhatsappShareButton>
      </S.PostLinks>
    </S.PostShare>
  )
}

export default PostShare
