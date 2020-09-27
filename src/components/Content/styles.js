import styled from 'styled-components'

export const Content = styled.div`
  ${({ theme, fontSizeIncrease }) => `
    color: ${theme.main.colors.content};
    font-size: calc(${theme.main.fonts.content.size}em * ${fontSizeIncrease});
    line-height: ${theme.main.fonts.content.lineHeight};
    a {
        color:${theme.base.colors.link};
    }
    .gatsby-highlight {
        margin: 2em 0;
    }
    h2, h3 {
        color: ${theme.main.colors.contentHeading};
        margin: 2em 0 1em;
        font-size: ${theme.main.fonts.contentHeading.h2Size}em;
        font-weight: ${theme.main.fonts.contentHeading.weight};
        line-height: ${theme.main.fonts.contentHeading.lineHeight};
        letter-spacing: -0.02em;
    }
    h3 {
        font-size: ${theme.main.fonts.contentHeading.h3Size}em;
    }
    p {
        margin: 0 0 1.5em 0;
        font-weight: 400;
    }
    ul {
        padding: 0 0 0 1.3em;
        list-style: circle;
        @media (min-width: ${theme.mediaQueryTresholds.M}px) {
            padding: 0 0 0 2em;
        }
    }
    li {
        margin: 0 0 .5em 0;
    }
    blockquote {
        border: 5px solid ${theme.main.colors.blockquoteFrame};
        margin: 2.5em 0;
        padding: 1em 1.1em 1em 1.3em;
        position: relative;
        font-style: italic;
        p {
            margin: 0;
        }
        ::before, ::after {
            top: -5px;
            left: 50%;
            width: 94%;
            height: 5px;
            content: "";
            position: absolute;
            background: ${theme.main.colors.background};
            margin-left: -47%;
        }
        ::after {
            top: auto;
            bottom: -5px;
        }
    }
  `}
`
