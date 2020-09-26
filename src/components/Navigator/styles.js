import styled from 'styled-components'

export const Navigator = styled.nav`
  ${({ theme }) => `
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    position: absolute;
    background: ${theme.navigator.colors.background};
    @media (max-width: ${theme.mediaQueryTresholds.L - 1}px) {
      &.is-aside {
        left: -100%;
      }
      &.is-featured {
        left: 0;
      }
    }
    @media (min-width: ${theme.mediaQueryTresholds.L}px) {
      &.is-featured {
        top: 0;
        left: ${theme.info.sizes.width}px;
        width: calc(100vw - ${theme.info.sizes.width}px - ${
    theme.bars.sizes.actionsBar
  }px);
      }
      &.is-aside {
        top: auto;
        left: 0;
        width: ${theme.info.sizes.width - 1}px;
        z-index: 1;
      }
      &.is-aside.closed {
        bottom: calc(-100% + 100px + ${theme.navigator.sizes.closedHeight}px);
        height: calc(100% - 100px);
      }
      &.is-aside.open {
        bottom: 0;
        height: calc(100% - 100px);
      }
      &.is-aside::after {
        top: 0;
        left: ${theme.base.sizes.linesMargin};
        right: ${theme.base.sizes.linesMargin};
        height: 0;
        content: "";
        position: absolute;
        border-top: 1px solid ${theme.base.colors.lines};
      }
    }
  `}
`
