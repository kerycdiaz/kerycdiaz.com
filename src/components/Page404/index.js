import React from 'react'

import * as S from './styles'

const NotFoundPage = () => {
  return (
    <S.NotFound>
      <div class="notfound">
        <div class="notfound-404">
          <h1>Oops!</h1>
        </div>
        <h2>404 - página no encontrada</h2>
        <p>Lo que buscabas ya no está aquí 😢</p>
        <a href="#">Ir al Inicio</a>
      </div>
    </S.NotFound>
  )
}

export default NotFoundPage
