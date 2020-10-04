import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  article, aside, footer, header, nav, section, figcaption, figure, main {
    display: block;
  }
  h1 {
    margin: 0.67em 0;
    font-size: 2em;
  }
  hr {
    height: 0;
    overflow: visible;
    box-sizing: content-box;
  }
  pre {
    font-size: 1em;
    font-family: monospace, monospace;
  }
  a:active, a:hover {
    outline-width: 0;
  }
  abbr[title] {
    border-bottom: none;
    text-decoration: underline;
  }
  b, strong {
    font-weight: bolder;
  }
  code, kbp, samp {
    font-size: 1em;
    font-family: monospace, monospace;
  }
  dfn {
    font-style: italic;
  }
  mark {
    color: #000;
    background-color: #ff0;
  }
  small {
    font-size: 80%;
  }
  sub, sup {
    position: relative;
    font-size: 75%;
    line-height: 0;
    vertical-align: baseline;
  }
  sup {
    top: -0.5em;
  }
  sub {
    bottom: -0.25em;
  }
  audio, video {
    display: inline-block;
  }
  audio:not([controls]) {
    height: 0;
    display: none;
  }
  img {
    border-style: none;
    vertical-align: middle;
  }
  svg:not(:root) {
    overflow: hidden;
  }
  button, input, optgroup, select, textarea {
    margin: 0;
    font-size: 100%;
    font-family: sans-serif;
    line-height: 1.15;
  }
  button, input {
    overflow: visible;
  }
  button, select {
    text-transform: none;
  }
  button, [type=reset], [type=submit] {
    -webkit-appearance: button;
  }
  button::-moz-focus-inner, [type=button]::-moz-focus-inner, [type=reset]::-moz-focus-inner, [type=submit]::-moz-focus-inner {
    padding: 0;
    border-style: none;
  }
  button:-moz-focusring, [type=button]:-moz-focusring, [type=reset]:-moz-focusring, [type=submit]:-moz-focusring {
    outline: 1px dotted ButtonText;
  }
  fieldset {
    border: 1px solid #c0c0c0;
    margin: 0 2px;
    padding: 0.35em 0.625em 0.75em;
  }
  legend {
    color: inherit;
    display: table;
    padding: 0;
    max-width: 100%;
    box-sizing: border-box;
    white-space: normal;
  }
  progress {
    display: inline-block;
    vertical-align: baseline;
  }
  textarea {
    overflow: auto;
  }
  [type=checkbox], [type=radio] {
    padding: 0;
    box-sizing: border-box;
  }
  [type=number]::-webkit-inner-spin-button, [type=number]::-webkit-outer-spin-button {
    height: auto;
  }
  [type=search] {
    outline-offset: -2px;
    -webkit-appearance: textfield;
  }
  [type=search]::-webkit-search-cancel-button, [type=search]::-webkit-search-decoration {
    -webkit-appearance: none;
  }
  ::-webkit-file-upload-button {
    font: inherit;
    -webkit-appearance: button;
  }
  details, menu {
    display: block;
  }
  summary {
    display: list-item;
  }
  canvas {
    display: inline-block;
  }
  template {
    display: none;
  }
  [hidden] {
    display: none;
  }
  html {
    box-sizing: border-box;
    font-family: Open Sans;
    line-height: 1.15;
    text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    -moz-text-size-adjust: none;
    -webkit-text-size-adjust: 100%;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  noscript {
    top: 50%;
    left: 50%;
    color: #fff;
    padding: 1.5rem 2.5rem;
    z-index: 1000;
    position: absolute;
    transform: translate(-50%, -50%);
    background: #d00;
    box-shadow: 0 0 10px 52px rgba(255,255,255,.8);
    font-weight: 400;
    border-radius: 2px;
  }
  body {
    margin: 0;
    background: #ffffff;
    -webkit-tap-highlight-color: rgba(0,0,0,.05);
  }
  main {
    position: relative;
  }
  h1, h2, h3 {
    font-weight: 300;
  }
  a {
    color: #b4a6ce;
    background: transparent;
    font-weight: bold;
    text-decoration: none;
    text-decoration-skip: objects;
  }
  input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 50px white inset;
  }
  :not(pre) > code[class*='language-'] {
    color: #666;
    padding: 1px 5px;
    background: #eee;
    text-shadow: none;
    border-radius: 2px;
  }
`
