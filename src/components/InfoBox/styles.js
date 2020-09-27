import styled from 'styled-components'

export const InfoBox = styled.aside`
    ${({ theme }) => `  
    display: none;
    @media (min-width: 1024px) {
        top: 0;
        left: 0;
        color: ${theme.info.colors.text};
        width: ${theme.info.sizes.width}px;
        height: 100%;
        display: block;
        padding: 20px 40px;
        position: absolute;
        background: ${theme.info.colors.background};
    }
    :after {
        top: 20px;
        right: 0;
        width: 1px;
        bottom: 20px;
        content: "";
        position: absolute;
        border-right: 1px solid ${theme.base.colors.lines};
    }
  `}
`

export const InfoWrapper = styled.div`
    ${({ theme }) => `
    top: ${theme.info.sizes.headerHeight}px;
    left: 0;
    width: 100%;
    bottom: 0;
    opacity: 1;
    padding: 0 40px 0;
    position: absolute;
    will-change: opacity, bottom;
    ${InfoBox}.is-aside.closed & {
      bottom: ${theme.navigator.sizes.closedHeight}px;
    }
  `}
`
