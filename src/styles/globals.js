import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html, body {
  font-size: 14px;
  padding: 0;
  margin: 0;
  font-family: 'Roboto', sans-serif;
  background-color: #d5d5d5;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  margin: 0;
  box-sizing: border-box;
}

main{
  margin-bottom: 93px;
  padding: 0px 26px;
  max-width: 720px;
  margin: 0 auto;
}
`

export const theme = {
  colors: {
    white: '#F1F1F1',
    white100: '#EAEAEA',
    darkGreen200: '#596E45',
    darkGreen: '#6E8755',
    lightGreen: '#CDE6B4',
    lightOrange: '#F89B67',
    darkOrange: '#A64208',
    black: '#0D0D0D'
  },
}

