import React from 'react'

import * as S from './styles'

const InfoFooter = () => {
  const year = () => {
    var today = new Date()
    return String(today.getFullYear())
  }
  return (
    <S.InfoFooter>
      <S.Text>© kerycdiaz.com {year()}</S.Text>
    </S.InfoFooter>
  )
}
export default InfoFooter
