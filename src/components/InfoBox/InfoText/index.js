import Button from '@material-ui/core/Button'
import { Link } from 'gatsby'
import React from 'react'
import { connect } from 'react-redux'

import usePartsList from '@hooks/parts'

import { setNavigatorPosition, setNavigatorShape } from '@store/actions'

import * as S from './styles'

const InfoText = ({ setNavigatorPosition, setNavigatorShape }) => {
  const parts = usePartsList()
  const info = parts.find((el) => {
    return el.node.frontmatter.title === 'info'
  })
  const bestArticle = parts.find((el) => {
    return el.node.frontmatter.title === 'best-article'
  })
  if (!info || !bestArticle) return null

  const linkOnClick = () => {
    setNavigatorPosition('is-aside')
    setNavigatorShape('closed')
  }

  return (
    <S.InfoText>
      <div dangerouslySetInnerHTML={{ __html: info.node.html }} />
      <div dangerouslySetInnerHTML={{ __html: bestArticle.node.html }} />
      <S.CallToAction>
        <Link to="/sobre-mi">
          <Button variant="contained" color="primary" onClick={linkOnClick}>
            ME GUSTARÍA LEER MÁS...
          </Button>
        </Link>
      </S.CallToAction>
    </S.InfoText>
  )
}

const mapDispatchToProps = {
  setNavigatorPosition,
  setNavigatorShape,
}

export default connect(null, mapDispatchToProps)(InfoText)
