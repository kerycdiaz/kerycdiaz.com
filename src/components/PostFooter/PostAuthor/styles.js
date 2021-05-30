import Avatar from '@material-ui/core/Avatar'
import styled from 'styled-components'

export const PostAuthor = styled.div`
  ${({ theme }) => `
    margin: 3em 0 0;
    display: flex;
    padding: 3em 0 0;
    border-top: 1px solid #ddd;
    align-items: center;
    flex-direction: column;
    a {
      color: ${theme.base.colors.link};
    }
    @media (min-width: ${theme.mediaQueryTresholds.M}px) {
      flex-direction: row;
      justify-content: center;
    }
  `}
`

export const PostAvatar = styled(Avatar)`
  ${({ theme }) => `
    && {
      width: 60px;
      border: 1px solid #ddd;
      height: 60px;
      margin: 0 1em 1em;
      flex-shrink: 0;
      border-radius: 75% 65%;
      @media (min-width: ${theme.mediaQueryTresholds.M}px) {
        margin: 0 1em 0;
      }
    }
  `}
`

export const PostBox = styled.div`
  display: flex;
  min-height: 50px;
  align-items: center;
  flex-dirction: column;
`

export const SocialIcons = styled.strong`
  text-align: center;
  margin-top: 5px;
  font-size: 11px;
`
