import styled from 'styled-components'

export const InfoText = styled.div`
  ${({ theme }) => `
  display: block;
  font-size: 0.95em;
  text-align: center;
  font-weight: 300;
  line-height: 1.5;
  margin-bottom: 0.8em;
  :first-child {
    margin-top: 0;
  }
  :last-child {
    margin-bottom: 0;
  }
  strong {
    color: #fff;
    font-weight: 550;
  }

  blockquote {
    margin: 3.5em 0 0;
    padding: 2em 0em 1em 0em;
    position: relative;
    font-style: italic;
    p {
        margin: 0;
    }
    ::before {
        top: -5px;
        left: 50%;
        width: 94%;
        height: 5px;
        content: "";
        position: absolute;
        background: ${theme.main.colors.background};
        margin-left: -47%;
    }
}
`}
`

export const CallToAction = styled.div`
  text-align: center;
  margin-top: 10px;
`
