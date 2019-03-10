import React, { Component } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import Board from './components/Board';

const GlobalStyle = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-size: 62.5%;
  }

  label {
    font-size: 1rem;
  }

  .btn {
    border: 1px solid #f3f3f3;
    padding: 0.5rem 1rem;
    border-radius: 3px;
    background: #f5f5f5;
    text-transform: uppercase;
    cursor: pointer;
    font-weight: bold;
  }

  input[type=${'"number"'}] {
    border: 1px solid #f3f3f3;
    padding: 0.5rem 1rem;
    border-radius: 3px;
    background: #ffffff;
  }
`;

const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-image: radial-gradient(circle, #a8eb12, #00bf72, #008793, #004d7a, #051937);
`;

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <Board />
        <GlobalStyle />
      </AppWrapper>
    );
  }
}

export default App;
