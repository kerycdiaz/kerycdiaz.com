import React from 'react'
import { connect } from 'react-redux'

import List from '@components/Navigator/List'

import usePostsList from '@hooks/posts'

import * as S from './styles'

const Navigator = ({ navigatorPosition, navigatorShape }) => {
  const posts = usePostsList()

  posts.reduce((list, edge, i) => {
    const category = edge.node.frontmatter.category
    if (category && !~list.indexOf(category)) {
      return list.concat(edge.node.frontmatter.category)
    } else {
      return list
    }
  }, [])

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
