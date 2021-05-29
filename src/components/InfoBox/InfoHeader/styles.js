import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import { Link } from 'gatsby'
import styled from 'styled-components'

import { InfoBox } from '../styles'

export const InfoHeader = styled.header`
  position: relative;
  line-height: 1;
`

export const AvatarLink = styled(Link)`
  ${({ theme }) => `
    top: 20px;
    width: 100%;
    text-align: center;
    position: absolute;

    ${InfoBox}.is-aside.open & {
      float: left;
      margin: 0 12px 0 0;
      display: block;
      position: relative;
      will-change: left, top;
      text-align: left;
      top: 0px;
    }
  `}
`

export const AvatarImg = styled(Avatar)`
  ${({ theme }) => `
    && {
        width: 76px;
        border: 1px solid #ddd;
        height: 76px;
        display: inline-block;
        overflow: hidden;
        border-radius: 5%;
        img {
            max-width: 100%;
        }
        @media (min-width: ${theme.mediaQueryTresholds.M}px) {
            width: 84px;
            height: 84px;
        }
        @media (min-width: ${theme.mediaQueryTresholds.L}px) {
            width: 100px;
            height: 100px;
        }
        ${InfoBox}.is-aside.open & {
          width: 60px;
          height: 60px;
        }
    }
  `}
`

export const Title = styled.h1`
  ${({ theme }) => `  
    float: left;
    margin: 0;
    font-size: ${theme.info.fonts.boxTitleSize}em;
    will-change: transform, left, top;
    transform: translate(-50%);
    text-align: center;
    top: 145px;
    left: 50%;
    position: absolute;
    font-weight: 700;
    small {
        display: block;
        font-size: .6em;
        margin-top: .3em;
    }
    @media (min-width: ${theme.mediaQueryTresholds.M}px) {
        font-size: ${theme.info.fonts.boxTitleSizeM}em;
    }
    @media (min-width: ${theme.mediaQueryTresholds.L}px) {
        font-size: ${theme.info.fonts.boxTitleSizeL}em;  
    }
    ${InfoBox}.is-aside.open & {
        top: ${2.4 - theme.info.fonts.boxTitleSizeL}em;
        left: 65%;
        text-align: left;
        font-size: 20px;
    }
  `}
`

export const ExpandButtom = styled(IconButton)`
  ${({ theme }) => `  
    && {
        top: 30px;
        color: ${theme.info.colors.text};
        right: -25px;
        display: none;
        position: absolute;
        ${InfoBox}.is-aside.open & {
            display: block;
        }
    }
  `}
`
