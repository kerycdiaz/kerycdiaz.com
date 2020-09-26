import Avatar from '@material-ui/core/Avatar'
import { Link } from 'gatsby'
import styled from 'styled-components'

export const InfoBar = styled.aside`
  ${({ theme }) => `  
    top: 0;
    left: 0;
    width: 100%;
    height: ${theme.bars.sizes.infoBar};
    position: absolute;
    background: ${theme.bars.colors.background};
    ::before {
        left: ${theme.base.sizes.linesMargin};
        right: ${theme.base.sizes.linesMargin};
        bottom: 0;
        height: 0;
        content: "";
        position: absolute;
        border-top: 1px solid ${theme.base.colors.lines};
    }
    @media (min-width: ${theme.mediaQueryTresholds.L}px) {
        display: none;
    }
  `}
`

export const AvatarLink = styled(Link)`
  float: left;
  margin: 13px 0 0 30px;
  display: block;
`

export const AvatarImg = styled(Avatar)`
  && {
    width: 36px;
    border: 1px solid #ddd;
    height: 36px;
    border-radius: 65% 75%;
  }
`

export const Title = styled.h3`
  ${({ theme }) => `  
    color: ${theme.bars.colors.text};
    float: left;
    margin: 10px 0 0 15px;
    small {
        margin: 2px 0 0 0;
        display: block;
        font-size: .65em;
    }
  `}
`
