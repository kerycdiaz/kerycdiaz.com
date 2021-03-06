import CloseIcon from '@material-ui/icons/Close'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import { navigate } from 'gatsby'
import React from 'react'
import { forceCheck } from 'react-lazyload'
import { connect } from 'react-redux'

import usePartsList from '@hooks/parts'

import { setCategoryFilter, setNavigatorShape } from '@store/actions'

import * as S from './styles'

const ListHeader = ({
  categoryFilter,
  setNavigatorShape,
  setCategoryFilter,
}) => {
  const expandOnClick = () => {
    setNavigatorShape('open')
    setTimeout(forceCheck, 0)
  }

  const removefilterOnClick = () => {
    setCategoryFilter('all posts')
    navigate('/blog')
  }

  const parts = usePartsList()
  const info = parts.find((el) => {
    return el.node.frontmatter.title === 'info'
  })
  return (
    <header>
      <S.HeaderMobile>
        <h2>BLOG PERSONAL</h2>
        <div dangerouslySetInnerHTML={{ __html: info.node.html }}></div>
      </S.HeaderMobile>
      <S.Closed>
        <h3>Lista de articulos</h3>
        <S.IconExpand
          aria-label="Expand the list"
          onClick={expandOnClick}
          title="Expand the list"
        >
          <ExpandLessIcon />
        </S.IconExpand>
      </S.Closed>
      {categoryFilter !== 'all posts' && (
        <S.Filter>
          <small>Artículos de la categoría:</small>{' '}
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
  }
}

const mapDispatchToProps = {
  setCategoryFilter,
  setNavigatorShape,
}

export default connect(mapStateToProps, mapDispatchToProps)(ListHeader)
