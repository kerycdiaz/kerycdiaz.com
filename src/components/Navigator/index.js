import React from 'react'
import { connect } from 'react-redux'

import List from '@components/Navigator/List'

import * as S from './styles'

const Navigator = ({ navigatorPosition, navigatorShape, posts }) => {
  return (
    <S.Navigator
      className={
        `${navigatorPosition ? navigatorPosition : ''} ` +
        `${navigatorShape ? navigatorShape : ''}`
      }
    >
      {posts.length && <List posts={posts} />}
    </S.Navigator>
  )
}

const mapStateToProps = (state) => {
  return {
    navigatorPosition: state.reducers.navigatorPosition,
    navigatorShape: state.reducers.navigatorShape,
  }
}

export default connect(mapStateToProps, null)(Navigator)
