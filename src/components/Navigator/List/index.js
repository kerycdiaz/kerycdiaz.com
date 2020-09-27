import React from 'react'

import ListHeader from '@components/Navigator/ListHeader'
import ListItem from '@components/Navigator/ListItem'
import SpringScrollbars from '@components/SpringScrollbars'

import * as S from './styles'

const List = ({ posts }) => {
  return (
    <S.List>
      <SpringScrollbars forceCheckOnScroll={true} isNavigator={true}>
        <S.ListContent>

          <ListHeader />
          <S.ListBody>
            {posts &&
              posts.map((post, i) => <ListItem key={i} post={post} />)}
          </S.ListBody>
        </S.ListContent>
      </SpringScrollbars>
    </S.List>
  )
}

export default List
