import { withStyles } from '@material-ui/core/styles'
import React from 'react'

import usePartsList from '@hooks/parts'

import PostAuthor from './PostAuthor'
import PostComments from './PostComments'
import PostShare from './PostShare'
import PostSuscribe from './PostSuscribe'

const styles = (theme) => ({
  footer: {
    color: theme.main.colors.footer,
    fontSize: `${theme.main.fonts.footer.size}em`,
    lineHeight: theme.main.fonts.footer.lineHeight,
    '& p': {
      margin: 0,
    },
  },
})

const PostFooter = ({ classes, slug, title, subTitle }) => {
  const parts = usePartsList()
  const author = parts.find((el) => {
    return el.node.frontmatter.title === 'author'
  })
  return (
    <footer className={classes.footer}>
      <PostShare slug={slug} title={title} subTitle={subTitle} />
      <PostAuthor author={author.node} />
      <PostSuscribe />
      <PostComments slug={slug} />
    </footer>
  )
}

export default withStyles(styles)(PostFooter)
