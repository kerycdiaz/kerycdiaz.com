import React from 'react'

import usePartsList from '@hooks/parts'

import PostAuthor from './PostAuthor'
import PostComments from './PostComments'
import PostShare from './PostShare'
import PostSuscribe from './PostSuscribe'
import * as S from './styles'

const PostFooter = ({ classes, id, slug, title, subTitle }) => {
  const parts = usePartsList()
  const author = parts.find((el) => {
    return el.node.frontmatter.title === 'author'
  })
  return (
    <S.PostFooter>
      <PostShare slug={slug} title={title} subTitle={subTitle} />
      <PostAuthor author={author.node} />
      <PostSuscribe />
      <PostComments id={id} />
    </S.PostFooter>
  )
}

export default PostFooter
