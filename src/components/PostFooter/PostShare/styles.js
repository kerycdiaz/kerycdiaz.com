import styled from 'styled-components'

export const PostShare = styled.div`
  ${({ theme }) => `
    display: flex;
    padding: 1em 0 0;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    @media (min-width: ${theme.mediaQueryTresholds.M}px) {
      flex-direction: row;
    }
  `}
`

export const PostLinks = styled.div`
  display: flex;
  flex-direction: row;
  .react-share__ShareButton {
    cursor: pointer;
    margin: 0 0.8em;
  }
`

export const PostLabel = styled.span`
  ${({ theme }) => `
    margin: 0 1em 1em;
    font-size: 1.2em;
    @media (min-width: ${theme.mediaQueryTresholds.M}px) {
      margin: 0 1em;
    }
  `}
`
