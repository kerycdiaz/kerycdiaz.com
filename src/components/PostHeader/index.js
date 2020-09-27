import React from 'react'

import * as S from './styles'

const PostHeader = ({ title, subTitle, date, timeToRead }) => {
  const dateObj = new Date(date).toUTCString()
  const dateFormat = dateObj.split(' ').slice(0, 4).join(' ')
  return (
    <S.PostHeader>
      <S.HeaderTitle>{title}</S.HeaderTitle>
      <S.HeaderSubTitle>{subTitle}</S.HeaderSubTitle>
      <S.HeaderDate>{dateFormat} . {timeToRead} min read</S.HeaderDate>
    </S.PostHeader>
  )
}

export default PostHeader
