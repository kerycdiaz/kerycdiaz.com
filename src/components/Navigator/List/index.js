import React from 'react'

import ListHeader from '@components/Navigator/ListHeader'
import ListItem from '@components/Navigator/ListItem'
import SpringScrollbars from '@components/SpringScrollbars'

import * as S from './styles'

const List = ({ posts }) => {
  // analizar: no se para que era esto,
  // creo que para que recargen imagenes

  /*componentDidUpdate(prevProps) {
    const { categoryFilter } = this.props;
    if (prevProps.categoryFilter !== categoryFilter) {
      setTimeout(forceCheck, 300); //No se que hace aun
    }
  }
  */

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
