import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html, body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  margin: 0;
  box-sizing: border-box;
}
`

export const theme = {
  colors: {
    branco: '#F1F1F1',
    darkGreen: '#6E8755',
    lightGreen: '#CDE6B4',
    lightOrange: '#F89B67',
    darkOrange: '#E45F35',
    black: '#0D0D0D'
  },
}

