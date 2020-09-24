import styled from 'styled-components'

export const Layout = styled.div`
  padding: 1px;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: hidden;
  @media print {
    position: relative;
    overflow: 'visible';
  }
`
