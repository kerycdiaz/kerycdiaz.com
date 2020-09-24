import React from 'react'

import * as S from './styles'

const PageHeader = ({ title }) => {
  return (
    <S.PageHeader>
      <S.HeaderTitle>{title}</S.HeaderTitle>
    </S.PageHeader>
  )
}

export default PageHeader
