import SvgIcon from '@material-ui/core/SvgIcon'
import styled from 'styled-components'

export const SocialIcons = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export const IconLink = styled.a`
  ${({ theme }) => `
    display: inline-block;
    padding: 2px;
    :hover svg {
        fill: ${theme.info.colors.socialIconsHover};
    }
  `}
`

export const IconSvg = styled(SvgIcon)`
  ${({ theme }) => `
    && {
        fill: ${theme.info.colors.socialIcons};
        width: 30px;
        height: 30px;
    }
  `}
`
