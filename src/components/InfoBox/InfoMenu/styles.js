import { Link } from 'gatsby'
import styled from 'styled-components'

export const InfoMenu = styled.nav`
  width: 100%;
  margin: 0;
  display: flex;
  list-style: none;
  align-items: center;
  flex-direction: column;
`

export const MenuLink = styled(Link)`
  ${({ theme }) => `
    color: ${theme.info.colors.menuLink};
    padding: .5em;
    font-weight: 300;
    text-transform: lowercase;
    :hover {
        color: ${theme.info.colors.menuLinkHover};
    }
  `}
`
