import React from 'react'

import usePartsList from '@hooks/parts'

import * as S from './styles'

const Footer = () => {
  const parts = usePartsList()
  const footnote = parts.find((el) => {
    return el.node.frontmatter.title === 'footnote'
  })
  if (!footnote) return null
  return (
    <S.Footer>
      <S.FooterText dangerouslySetInnerHTML={{ __html: footnote.node.html }} />
    </S.Footer>
  )
}

export default Footer
