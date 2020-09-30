import React from 'react'
import { connect } from 'react-redux'

import usePagesList from '@hooks/pages'

import { setNavigatorPosition, setNavigatorShape } from '@store/actions'

import * as S from './styles'

const InfoMenu = ({ setNavigatorPosition, setNavigatorShape }) => {
  const linkOnClick = () => {
    setNavigatorPosition('is-aside')
    setNavigatorShape('closed')
  }
  const pages = usePagesList()
  return (
    <S.InfoMenu>
      {pages.map((page, i) => {
        const { fields, frontmatter } = page.node
        const title = frontmatter.menuTitle
          ? frontmatter.menuTitle
          : frontmatter.title
        return (
          <S.MenuLink key={fields.slug} to={fields.slug} onClick={linkOnClick}>
            {title}
          </S.MenuLink>
        )
      })}
      {/*<S.MenuLink to="/contact/" onClick={linkOnClick}>
        Contact
      </S.MenuLink>*/}
    </S.InfoMenu>
  )
}

const mapDispatchToProps = {
  setNavigatorPosition,
  setNavigatorShape,
}

export default connect(null, mapDispatchToProps)(InfoMenu)
