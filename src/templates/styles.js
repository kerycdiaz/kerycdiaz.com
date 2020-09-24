import React from 'react'
import styled from 'styled-components'

import Footer from '@components/Footer'
import SpringScrollbars from '@components/SpringScrollbars'

export const Article = styled.div`
  ${({ theme }) => `
    margin: 0 auto;
    padding: calc(60px + 1.5rem) 1.5rem  1.5rem 1.5rem;
    max-width: 50em;
    background: #ffffff;
    strong, b {
      letter-spacing: -.02em;
    }
    a {
      transition: 0.3s;
      font-weight: bold;
      letter-spacing: -.02em;
      text-decoration: underline;
    }
    @media (min-width: 600px) {
      padding: calc(2.5rem + 60px) 3.5rem 2.5rem;
    }
    @media (min-width: 1024px) {
      padding: 3.5rem;
    }
    a:hover {
      color: hsl(79.5, 60%, 39.9%);
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
    animation-name: main-entry;
    animation-duration: .5s;
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

const Content = ({ className, html }) => (
  <div className={className} dangerouslySetInnerHTML={{ __html: html }} />
)

export const ContentWrapper = styled(Content)`
  ${({ theme }) => `
    color: #333333;
    line-height: 1.6;
    a {
      color: #709425;
    }
    .gatsby-highlight {
      margin: 2em 0;
    }
    .gatsby-resp-iframe-wrapper {
      margin: 2em 0;
    }
    .gatsby-resp-image-link {
      border: none;
      margin: 2em -1.5rem;
    }
    h2, h3 {
      color: #555555;
      margin: 2em 0 1em;
      font-size: 1.5em;
      font-weight: 600;
      line-height: 1.3;
      letter-spacing: -0.02em;
    }
    h3 {
      font-size: 1.3em;
    }
    p {
      margin: 0 0 1.5em 0;
      font-weight: 400;
    }
    ul {
      padding: 0 0 0 1.3em;
      list-style: circle;
    }
    li {
      margin: 0 0 .5em 0;
    }
    blockquote {
      border: 5px solid #bbbbbb;
      margin: 2.5em 0;
      padding: 1em 1.1em 1em 1.3em;
      position: relative;
      font-style: italic;
    }
    @media (min-width: 600px) {
        font-size: 1.15em;
    }
    @media (min-width: 1024px) {
        font-size: 1.1em;
    }
    blockquote p {
      margin: 0;
    }
    blockquote::before, blockquote::after {
      top: -5px;
      left: 50%;
      width: 94%;
      height: 5px;
      content: "";
      position: absolute;
      background: #ffffff;
      margin-left: -47%;
    }
    blockquote::after {
      top: auto;
      bottom: -5px;
    }
    @media (min-width: 600px) {
      ul {
        padding: 0 0 0 2em;
      }
    }
    @media (min-width: 600px) {
      .gatsby-resp-image-link {
        margin: 2.5em -3.5rem;
      }
    }
  `}
`
