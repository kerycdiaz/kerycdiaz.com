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
    float: left;
    margin: 0 12px 0 0;
    display: block;
    position: relative;
    will-change: left, top;
    @media (min-width: ${theme.mediaQueryTresholds.M}px) {
        margin: 0 20px 0 0;
    }
    @media (min-width: ${theme.mediaQueryTresholds.L}px) {
        top: 10px;
        left: 50%;
        position: absolute;
        transition: all .5s;
        margin-left: -30px;
        transition-timing-function: ease;
        ${InfoBox}.is-aside.open & {
            top: 0;
            left: 8%;
        }
    }
  `}
`

export const AvatarImg = styled(Avatar)`
  ${({ theme }) => `
    && {
        width: 36px;
        border: 1px solid #ddd;
        height: 36px;
        display: inline-block;
        overflow: hidden;
        transition: all 0.3s;
        border-radius: 65% 75%;
        transition-timing-function: ease;
        img {
            max-width: 100%;
        }
        @media (min-width: ${theme.mediaQueryTresholds.M}px) {
            width: 44px;
            height: 44px;
        }
        @media (min-width: ${theme.mediaQueryTresholds.L}px) {
            width: 60px;
            height: 60px;
        }
        @media (hover: hover) {
            border-radius: 75% 65%;
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
    transition-timing-function: ease;
    small {
        display: block;
        font-size: .6em;
        margin-top: .3em;
    }
    @media (min-width: ${theme.mediaQueryTresholds.M}px) {
        font-size: ${theme.info.fonts.boxTitleSizeM}em;
    }
    @media (min-width: ${theme.mediaQueryTresholds.L}px) {
        top: 85px;
        left: 50%;
        position: absolute;
        font-size: ${theme.info.fonts.boxTitleSizeL}em;
        transform: translate(-50%);
        text-align: center;
        transition: all .5s;
    }
    ${InfoBox}.is-aside.open & {
        top: ${1.9 - theme.info.fonts.boxTitleSizeL}em;
        left: 60%;
        text-align: left;
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
