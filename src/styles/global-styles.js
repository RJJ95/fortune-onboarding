import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
html {
  font-size: 100%;
}

body {
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: ${({ theme }) => theme.font};
  background-color: ${({ theme }) => theme.colors.whiteSmoke};
}

h1, h2, h3, h4, h5, h6 {
  font-weight: 300;
  margin: 0;
}

h1 {
  font-size: 2.5rem;
}

p {
  font-size: 1rem;
  line-height: 1.8;
}

a {
  text-decoration: none;
  color: ${({ theme }) => theme.colors.black};
}

button {
  font-size: 1rem;
  padding: 15px 30px;
  border-radius: ${({ theme }) => theme.borderRadius};
  border: none;
  box-shadow: ${({ theme }) => theme.shadow};
  cursor: pointer;
}

input, select {
  font-size: 1rem;
  height: 40px;
  border-radius: ${({ theme }) => theme.borderRadius};
  outline: none;
  border: none;
  color: ${({ theme }) => theme.colors.black};
  padding: 0 15px;
  background-color: ${({ theme }) => theme.colors.whiteSmoke};
  font-family: ${({ theme }) => theme.font};
  box-sizing: border-box;
  width: 100%;
}

select {
  appearance: none;
  cursor: pointer;
}
`;

export default GlobalStyles;
