import React from 'react'
import { connect } from 'react-redux'

import { setFontSizeIncrease } from '@store/actions'

import * as S from './styles'

const Content = ({ html, children, fontSizeIncrease }) => {
  if (html) {
    return (
      <S.Content
        fontSizeIncrease={fontSizeIncrease}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    )
  } else {
    return <S.Content>{children}</S.Content>
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    fontSizeIncrease: state.reducers.fontSizeIncrease,
  }
}

const mapDispatchToProps = {
  setFontSizeIncrease,
}

export default connect(mapStateToProps, mapDispatchToProps)(Content)
