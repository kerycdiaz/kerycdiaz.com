import { Link } from 'gatsby'
import styled from 'styled-components'

import { Navigator } from '@components/Navigator/styles'

export const ListItem = styled.li`
  ${({ theme }) => `
    margin: 0 0 .7em 0;
    @media (min-width: ${theme.mediaQueryTresholds.M}px) {
        margin: 0 0 1.5rem 0;
    }
    @media (min-width: ${theme.mediaQueryTresholds.L}px) {
        ${Navigator}.is-aside & {
            margin: 0 0 0 0;
        }
    }
  `}
`

export const ListLink = styled(Link)`
  ${({ theme }) => `
    color: ${theme.navigator.colors.postsListItemLink};
    display: flex;
    padding: .7em 1em .7em 1em;
    align-items: center;
    align-content: center;
    flex-direction: row;
    justify-content: flex-start;
    @media (hover: hover) {
        :hover {
            color: ${theme.navigator.colors.postsListItemLinkHover};
        }
        :hover ${ListImage} {
          border-radius: 15%;
        }
    }
  `}
`

export const ListImage = styled.div`
  ${({ theme }) => `
    width: 60px;
    height: 60px;
    margin: 0;
    overflow: hidden;
    position: relative;
    flex-shrink: 0;
    border-radius: 5%;
    img {
        width: 100%;
        height: 100%;
    }
    @media (min-width: ${theme.mediaQueryTresholds.M}px) {
        width: 80px;
        height: 80px;
        margin-right: .5em;
    }
    @media (min-width: ${theme.mediaQueryTresholds.L}px) {
        width: 90px;
        height: 90px;
        margin-right: .8em;
        ${Navigator}.is-aside & {
            width: 30px;
            height: 30px;
        }
    }
  `}
`

export const ListText = styled.div`
  ${({ theme }) => `
    width: 100%;
    margin: 0 0 0 1.5em;
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    h1 {
        margin: 0;
        font-size: ${theme.navigator.sizes.postsListItemH1Font}em;
        font-weight: 600;
        line-height: 1.15;
        letter-spacing: -0.03em;
    }
    h2 {
        margin: .3em 0 0 0;
        display: block;
        font-size: ${theme.navigator.sizes.postsListItemH2Font}em;
        line-height: 1.2;
    }
    @media (min-width: ${theme.mediaQueryTresholds.L}px) {
      ${Navigator}.is-aside & {
            margin: 0 0 0 .5em;
        }
    }
    @media (min-width: ${theme.mediaQueryTresholds.M}px) {
        h2 {
            font-size: ${
              theme.navigator.sizes.postsListItemH2Font *
              theme.navigator.sizes.fontIncraseForM
            }em;
        }
    }
    @media (min-width: ${theme.mediaQueryTresholds.L}px) {
        h2 {
            font-size: ${
              theme.navigator.sizes.postsListItemH2Font *
              theme.navigator.sizes.fontIncraseForL
            }em;
        }
        ${Navigator}.is-aside & h2  {
            display: none;
        }
    }
    @media (min-width: ${theme.mediaQueryTresholds.M}px) {
        h1 {
            font-size: ${
              theme.navigator.sizes.postsListItemH1Font *
              theme.navigator.sizes.fontIncraseForM
            }em;
        }
    }
    @media (min-width: ${theme.mediaQueryTresholds.L}px) {
        h1 {
            font-size: ${
              theme.navigator.sizes.postsListItemH1Font *
              theme.navigator.sizes.fontIncraseForL
            }em;
        }
        ${Navigator}.is-aside & h1 {
            font-size: 1em;
            font-weight: 400;
        }
    }
  `}
`
