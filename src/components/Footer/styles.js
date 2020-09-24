import styled from 'styled-components'

export const Footer = styled.footer`
  ${({ theme }) => `
    color: ${theme.main.colors.footer};
    padding: 1.5rem 1.5rem  calc(${theme.bars.sizes.actionsBar}px + 1.5rem) 1.5rem;
    p {
        margin: 0;
    }
    @media (min-width: ${theme.mediaQueryTresholds.M}px) {
        padding: 2rem 2.5rem  calc(${theme.bars.sizes.actionsBar}px + 2rem) 2.5rem;
    }
    @media (min-width: ${theme.mediaQueryTresholds.L}px) {
        padding: 2rem 3rem 2rem 3rem;
    }
  `}
`

export const FooterText = styled.div`
  ${({ theme }) => `
    color: ${theme.footer.colors.text};
    font-size: ${theme.footer.fonts.footnote.size}em;
    line-height: ${theme.footer.fonts.footnote.lineHeight};
    a {
        color: ${theme.footer.colors.link};
        font-weight: normal;
        text-shadow: none;
    }
    a:hover {
        color: ${theme.footer.colors.linkHover};
    }
    ul {
        margin: 0;
        padding: 0;
        list-style: none;
        text-align: center;
    }
    li {
        margin: 0 .3em;
        display: inline-block;
    }
  `}
`
