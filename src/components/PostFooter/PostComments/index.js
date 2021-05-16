import React from 'react'

import Commento from '@components/Commento'

import * as S from './styles'

const PostComments = ({ classes, id }) => {
  return (
    <S.PostComments>
      <Commento id={id} />
    </S.PostComments>
  )
}
export default PostComments
