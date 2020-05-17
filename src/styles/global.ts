import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }


  body {
    background: #EDEDED ;
    -webkit-font-smoothing: antialiased;
    color: #0A0909;
  }

  body, input, button {
    font: 16px "Poppins", sans-serif;
    /* font-size: 16px; */
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }


`;
