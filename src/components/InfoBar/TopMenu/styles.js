import IconButton from '@material-ui/core/IconButton'
import { Link } from 'gatsby'
import styled from 'styled-components'

export const TopMenu = styled.nav`
  ${({ theme }) => `  
    float: right;
    margin: 5px 10px 0 0;
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
