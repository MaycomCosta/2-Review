import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
 * {
  ::after{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  }
  ::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  }

}
 body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background: #F1F5F9;
  color: hsl(209, 61%, 16%);
  line-height: 1;
  font-size: 0.875rem;
 }
`
export default GlobalStyle