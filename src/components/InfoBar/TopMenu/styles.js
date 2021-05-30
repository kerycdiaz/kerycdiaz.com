import IconButton from '@material-ui/core/IconButton'
import List from '@material-ui/core/List'
import { Link } from 'gatsby'
import styled from 'styled-components'

export const TopMenu = styled.nav`
  ${({ theme }) => `  
    float: right;
    margin: 10px 10px 0 0;
  `}
`

export const MenuIconColor = styled(IconButton)`
  ${({ theme }) => `
    && {
        color: ${theme.bars.colors.icon};
    }  
  `}
`

export const MenuItemLink = styled(Link)`
  ${({ theme }) => `  
    color: ${theme.navigator.colors.postsListItemLink};
  `}
`

export const MenuMobile = styled.div`
  ${({ theme, path }) => `
    @media (min-width: ${theme.mediaQueryTresholds.L}px) {
      display: ${path === '/' ? 'none' : 'block'};
    }
  `}
`
export const MenuWeb = styled(List)`
  ${({ theme, path }) => `  
    && {
      display: none;
      flexDirection: row;
      padding: 0;
      @media (min-width: ${theme.mediaQueryTresholds.L}px) {
        display: ${path === '/' ? 'flex' : 'none'};
      }
    }
  `}
`

export const MenuWebLink = styled(Link)`
  ${({ theme }) => `  
    color: ${theme.navigator.colors.background};
  `}
`
