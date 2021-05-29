import Button from '@material-ui/core/Button'
import { Link } from 'gatsby'
import React from 'react'

import usePartsList from '@hooks/parts'

import * as S from './styles'

const Navigator = () => {
  const parts = usePartsList()
  const info = parts.find((el) => {
    return el.node.frontmatter.title === 'info'
  })
  const bestArticle = parts.find((el) => {
    return el.node.frontmatter.title === 'best-article'
  })
  if (!info || !bestArticle) return null
  return [
    <S.InfoText dangerouslySetInnerHTML={{ __html: info.node.html }} />,
    <S.InfoText dangerouslySetInnerHTML={{ __html: bestArticle.node.html }} />,
    <S.CallToAction>
      <Link to="/maracaibo-lo-mejor-que-recuerdo">
        <Button variant="contained" color="primary" to="/contact/">
          ME GUSTARÍA LEER MÁS...
        </Button>
      </Link>
    </S.CallToAction>,
  ]
}

export default Navigator
