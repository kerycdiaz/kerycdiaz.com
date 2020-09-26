import styled from 'styled-components'

import { Navigator } from '@components/Navigator/styles'

export const List = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  bottom: 0;
  position: absolute;
`

export const ListContent = styled.div`
  ${({ theme }) => `
    padding: calc(${theme.bars.sizes.infoBar}px + 1.3rem) 1.3rem calc(${theme.bars.sizes.actionsBar}px + 1.3rem) 1.3rem;
    @media (min-width: ${theme.mediaQueryTresholds.M}px) {
        padding: calc(${theme.bars.sizes.infoBar}px + 2rem) 2rem calc(${theme.bars.sizes.infoBar}px + 2rem) 2rem;
    }
    @media (min-width: ${theme.mediaQueryTresholds.L}px) {
        left:${theme.info.sizes.width}px;
        padding: 2rem  calc(1rem + 17px) calc(2rem + 17px) 2rem;
        ${Navigator}.is-aside & {
            padding: 1rem .5rem 1rem .5rem;
        }
    }
  `}
`

export const ListBody = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  ${Navigator}.is-aside.closed & {
    display: none;
  }
`
