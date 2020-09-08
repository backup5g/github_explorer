import { createGlobalStyle } from 'styled-components'

import background from '../assets/background.svg'

export default createGlobalStyle`
  :root {
    font-size: 62.5%;

    --color-background: #f0f0f5;
    --color-title: #3a3a3a;
    --color-text: #737380; 
    --color-cta: #04d361;
    --color-card-background: #fff; 
    --color-card-title: #3d3d4d;
    --color-card-text: #a8a8b3;
    --color-icons: #cbcbd6;
    --color-error: #c53030;
  }

  * {
    margin: 0%;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: var(--color-background) url(${background}) no-repeat 70% top;
    -webkit-font-smoothing: antialiased;
  }

  body, button, input {
    font: 1.6rem Roboto, sans-serif;
  }

  #root {
    max-width: 960px;

    margin: 0 auto;
    padding: 4rem 2rem;
  }

  button {
    cursor: pointer;
  }

  @media (max-width: 700px) {
    :root {
      font-size: 60%;
    }

    #root {
      padding: 4rem 2.6rem;
    }

    body {
      background: var(--color-background) url(${background});
    }
  }
`
