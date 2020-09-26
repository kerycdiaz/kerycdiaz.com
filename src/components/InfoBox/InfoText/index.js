import React from 'react'

import usePartsList from '@hooks/parts'

import * as S from './styles'

const Navigator = () => {
  const parts = usePartsList()
  const info = parts.find((el) => {
    return el.node.frontmatter.title === 'info'
  })
  if (!info) return null
  return <S.InfoText dangerouslySetInnerHTML={{ __html: info.node.html }} />
}

export default Navigator
