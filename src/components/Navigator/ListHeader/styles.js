import IconButton from '@material-ui/core/IconButton'
import styled from 'styled-components'

import { Navigator } from '@components/Navigator/styles'

export const Closed = styled.div`
  ${({ theme }) => `
    display: none;
    ${Navigator}.is-aside.closed & {
      top: 0;
      left: 0;
      width: 100%;
      height: ${theme.navigator.sizes.closedHeight}px;
      margin: 0;
      display: flex;
      padding: 0 30px 0 40px;
      position: absolute;
      align-items: center;
      flex-direction: row;
      justify-content: space-between;
    }
    h3 {
      color: ${theme.navigator.colors.postsHeader};
      margin: -.2em 0 0 0;
      font-size: 1.1em;
      font-weight: 600;
      text-transform: uppercase;
    }
    h3 small {
      margin: 0 0 .1em;
      display: block;
      font-size: .6em;
      font-weight: 300;
      letter-spacing: .2em;
    }
  `}
`

export const IconExpand = styled(IconButton)`
  ${({ theme }) => `
    && {
      color: ${theme.navigator.colors.postsHeader};
    }
  `}
`

export const IconClear = styled(IconButton)`
  && {
    top: 0;
    right: 0;
    position: absolute;
  }
`

export const Filter = styled.div`
  ${({ theme }) => `
    color: ${theme.base.colors.accent};
    margin: 0 calc(-.5rem + ${theme.base.sizes.linesMargin}) 1em calc(-.5rem + ${theme.base.sizes.linesMargin});
    padding: 0 1em 1em;
    position: relative;
    font-size: 1.2em;
    font-weight: 300;
    line-height: 1;
    border-bottom: 1px solid ${theme.base.colors.lines};
    strong {
      display: block;
      font-weight: 600;
    }
    small {
      margin: 0 0 .3em 0;
      display: block;
    }
    @media (min-width: ${theme.mediaQueryTresholds.L}px) {
      margin: 0 0 1em 0;
      padding: 0 1em 1.5em;
      ${Navigator}.is-aside & {
        margin: 0 calc(-.5rem + ${theme.base.sizes.linesMargin}) 1em calc(-.5rem + ${theme.base.sizes.linesMargin});
        padding: 0 0 1em .5em;
      }
    }
  `}
`