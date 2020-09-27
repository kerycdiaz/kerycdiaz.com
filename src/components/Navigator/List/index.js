import React, { useState } from 'react'
import { forceCheck } from 'react-lazyload'
import { connect } from 'react-redux'

import ListHeader from '@components/Navigator/ListHeader'
import ListItem from '@components/Navigator/ListItem'
import SpringScrollbars from '@components/SpringScrollbars'

import * as S from './styles'

const List = ({ posts, categoryFilter }) => {
  const [category, setCategory] = useState(null)

  if (categoryFilter !== category) {
    setCategory(categoryFilter)
    setTimeout(forceCheck, 300)
  }

  return (
    <S.List>
      <SpringScrollbars forceCheckOnScroll={true} isNavigator={true}>
        <S.ListContent>
          <ListHeader />
          <S.ListBody>
            {posts && posts.map((post, i) => <ListItem key={i} post={post} />)}
          </S.ListBody>
        </S.ListContent>
      </SpringScrollbars>
    </S.List>
  )
}

const mapStateToProps = (state) => {
  return {
    categoryFilter: state.reducers.categoryFilter,
  }
}

export default connect(mapStateToProps, null)(List)
