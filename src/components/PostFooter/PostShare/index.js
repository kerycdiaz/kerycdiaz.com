import { withStyles } from '@material-ui/core/styles'
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

const styles = (theme) => ({
  share: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '1em 0 0',
    [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {
      flexDirection: 'row',
    },
  },
  links: {
    display: 'flex',
    flexDirection: 'row',
    '& .react-share__ShareButton': {
      margin: '0 .8em',
      cursor: 'pointer',
    },
  },
  label: {
    fontSize: '1.2em',
    margin: '0 1em 1em',
    [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {
      margin: '0 1em',
    },
  },
})

const PostShare = ({ classes, slug, title, subTitle }) => {
  const url = config.siteMetadata.siteUrl + slug

  const iconSize = 36

  return (
    <div className={classes.share}>
      <span className={classes.label}>SHARE</span>
      <div className={classes.links}>
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
      </div>
    </div>
  )
}

export default withStyles(styles)(PostShare)
