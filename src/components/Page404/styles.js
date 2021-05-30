import styled from 'styled-components'

import no_found from '@assets/no-found.jpg'

export const NotFound = styled.div`
  ${({ theme }) => `
    position: relative;
    height: 100vh;

    .notfound {
        max-width: 410px;
        width: 100%;
        text-align: center;
        position: absolute;
        left: 50%;
        top: 50%;
        -webkit-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);

        h2 {
            color: #000;
            font-size: 24px;
            font-weight: 700;
            text-transform: uppercase;
            margin-top: 0;
        }
        p {
            color: #000;
            font-size: 14px;
            font-weight: 400;
            margin-bottom: 20px;
            margin-top: 0px;
        }
        a {
            font-size: 14px;
            text-decoration: none;
            text-transform: uppercase;
            background: ${theme.palette.primary.main};
            display: inline-block;
            padding: 15px 30px;
            border-radius: 40px;
            color: #fff;
            font-weight: 700;
            -webkit-box-shadow: 0px 4px 15px -5px #0046d5;
            box-shadow: 0px 4px 15px -5px #0046d5;
        }
    }

    .notfound-404 {
        height: 280px;
        position: relative;
        z-index: -1;
        h1 {
        font-family: 'Montserrat', sans-serif;
        font-size: 230px;
        margin: 0px;
        font-weight: 900;
        position: absolute;
        left: 50%;
        -webkit-transform: translateX(-50%);
        -ms-transform: translateX(-50%);
        transform: translateX(-50%);
        background: url(${no_found}) no-repeat;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-size: cover;
        background-position: center;
        }
    }
    @media only screen and (max-width: 767px) {
        .notfound .notfound-404 {
        height: 142px;
        }
        .notfound .notfound-404 h1 {
        font-size: 112px;
        }
    }
  `}
`
