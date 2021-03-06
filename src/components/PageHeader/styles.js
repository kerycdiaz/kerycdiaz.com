import styled from 'styled-components'

export const PageHeader = styled.header`
  margin: 0 0 3em;
  display: flex;
  align-content: center;
  flex-direction: row;
  justify-content: flex-start;
`

export const HeaderTitle = styled.h1`
  ${({ theme }) => `
    color: ${theme.main.colors.title};
    margin: 0 0 0.4em;
    font-size: ${theme.main.fonts.title.size}em;
    font-weight: ${theme.main.fonts.title.weight};
    line-height: ${theme.main.fonts.title.lineHeight};
    letter-spacing: -0.04em;
    @media (min-width: ${theme.mediaQueryTresholds.M}px) {
      font-size: ${theme.main.fonts.title.sizeM}em;
    }
    @media (min-width: ${theme.mediaQueryTresholds.L}px) {
      font-size: ${theme.main.fonts.title.sizeL}em;
      letter-spacing: -0.05em;
    }
  `}
`
