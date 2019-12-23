import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  
  *:focus {
    outline: 0;
  }

   *::after, *::before {
    box-sizing: border-box;
  }
  
  html, body, #root {
    min-height: 100vh;
    background: #f3f3f3;
  }

  body {
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }

  body, input, button {
    font: 14px 'Roboto', sans-serif;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  input {
    border: none;
  }

  button {
    border: 0;
    cursor: pointer;
  }

`;
