import styled from 'styled-components'

import vallarta from '@assets/puerto-vallarta.jpg'

export const InfoBox = styled.aside`
  ${({ theme }) => ` 
    overflow: auto; 
    top: 0;
    left: 0;
    color: #fff;
    width: 100%;
    height: 100%;
    display: block;
    padding: 20px 40px;
    position: relative;
    background-position: center center !important;
    background-color: transparent !important;
    background-image: url(${vallarta}) !important;
    background-repeat: no-repeat;
    background-size: cover;
    :before {
      content:'';
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: rgba(0,0,0,0.8);
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
    padding: 0 10px 0;
    position: absolute;
    will-change: opacity, bottom;

    @media (min-width: ${theme.mediaQueryTresholds.M}px) {
      top: 270px;
      left: 0;
      width: 100%;
      bottom: 0;
      opacity: 1;
      font-size: 18px;
      padding: 0 5em 0;
      position: absolute;
      will-change: opacity,bottom;
    }
    
    @media (min-width: ${theme.mediaQueryTresholds.L}px) {
      top: 270px;
      left: 0;
      width: 100%;
      bottom: 0;
      opacity: 1;
      font-size: 23px;
      padding: 0 10em 0;
      position: absolute;
      will-change: opacity,bottom;
    }


    ${InfoBox}.is-aside.closed & {
      bottom: ${theme.navigator.sizes.closedHeight}px;
    }
  `}
`
