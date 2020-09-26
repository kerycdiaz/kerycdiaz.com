import styled from 'styled-components'

export const InfoFooter = styled.footer`
  ${({ theme }) => `
    display: none;
    @media (min-width: ${theme.mediaQueryTresholds.L}px) {
      left: 0;
      width: 100%;
      bottom: 0;
      display: block;
      padding: 1em 2em;
      position: absolute;
    }
  `}
`

export const Text = styled.h5`
  width: 100%;
  margin: 0 0 0.8em 0;
  padding: 8px;
  font-size: 0.85em;
  text-align: center;
  font-weight: 300;
  letter-spacing: 0.3em;
`
