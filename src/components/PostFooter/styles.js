import styled from 'styled-components'

export const PostFooter = styled.footer`
  ${({ theme }) => `
    color: ${theme.main.colors.footer};
    font-size: ${theme.main.fonts.footer.size}em;
    line-height: ${theme.main.fonts.footer.lineHeight};
    p {
        margin: 0;
    }
  `}
`
