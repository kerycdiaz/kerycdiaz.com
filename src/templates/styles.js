import React from 'react'
import styled from 'styled-components'

import Footer from '@components/Footer'
import SpringScrollbars from '@components/SpringScrollbars'

export const Article = styled.div`
  ${({ theme }) => `
    margin: 0 auto;
    padding: calc(${theme.bars.sizes.infoBar}px + 1.5rem) 1.5rem  1.5rem 1.5rem;
    max-width: ${theme.main.sizes.articleMaxWidth};
    background:${theme.main.colors.background};
    strong, b {
      letter-spacing: -.02em;
    }
    a {
      font-weight: bold;
      letter-spacing: -.02em;
      text-decoration: underline;
      :hover {
        color: ${theme.base.colors.linkHover};
      }
    }
    @media (min-width: ${theme.mediaQueryTresholds.M}px) {
      padding: calc(2.5rem + ${theme.bars.sizes.infoBar}px) 3.5rem 2.5rem;
    }
    @media (min-width: ${theme.mediaQueryTresholds.L}px) {
      padding: 3.5rem;
    }
  `}
`

const Template = ({ className, children }) => (
  <div className={className}>
    <SpringScrollbars>
      <Article>{children}</Article>
      <Footer />
    </SpringScrollbars>
  </div>
)

export const TemplateWrapper = styled(Template)`
  ${({ theme }) => `
    top: 0;
    left: 0;
    width: 100%;
    bottom: 0;
    position: absolute;
    @media (min-width: ${theme.mediaQueryTresholds.L}px) {
        left: ${theme.info.sizes.width}px;
        width: calc(100vw - ${theme.info.sizes.width}px - ${theme.bars.sizes.actionsBar}px);
    }
    @media print {
        position: relative;
        div {
            overflow: visible!important;
        }
        div > div {
            position: relative!important;
        }
    }
  `}
`
