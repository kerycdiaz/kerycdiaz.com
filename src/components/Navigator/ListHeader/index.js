import CloseIcon from '@material-ui/icons/Close'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import React from 'react'
import { forceCheck } from 'react-lazyload'
import { connect } from 'react-redux'

import { setCategoryFilter, setNavigatorShape } from '@store/actions'

import usePartsList from '@hooks/parts'

import * as S from './styles'

const ListHeader = ({
  categoryFilter,
  navigatorShape,
  setNavigatorShape,
  setCategoryFilter,
}) => {
  const expandOnClick = () => {
    setNavigatorShape('open')

    // analizar: creo que es para solicitar
    // de nuevo la carga de imagenes
    setTimeout(forceCheck, 0)
  }

  const removefilterOnClick = () => {
    setCategoryFilter('all posts')
  }

  const parts = usePartsList()
  const info = parts.find((el) => {
    return el.node.frontmatter.title === 'info'
  })
  console.log(info)
  return (
    <header>
      <S.HeaderMobile>
        <h2>BLOG PERSONAL</h2>
        <p dangerouslySetInnerHTML={{ __html: info.node.html }}></p>
      </S.HeaderMobile>
      {navigatorShape === 'closed' && (
        <S.Closed>
          <h3>List of posts</h3>
          <S.IconExpand
            aria-label="Expand the list"
            onClick={expandOnClick}
            title="Expand the list"
          >
            <ExpandLessIcon />
          </S.IconExpand>
        </S.Closed>
      )}
      {navigatorShape === 'open' && categoryFilter !== 'all posts' && (
        <S.Filter>
          <small>Active category filter:</small>{' '}
          <strong>{categoryFilter}</strong>
          <S.IconClear
            aria-label="Remove filtering"
            onClick={removefilterOnClick}
            title="Clear filtering"
          >
            <CloseIcon />
          </S.IconClear>
        </S.Filter>
      )}
    </header>
  )
}

const mapStateToProps = (state) => {
  return {
    categoryFilter: state.reducers.categoryFilter,
    navigatorShape: state.reducers.navigatorShape,
  }
}

const mapDispatchToProps = {
  setCategoryFilter,
  setNavigatorShape,
}

export default connect(mapStateToProps, mapDispatchToProps)(ListHeader)
