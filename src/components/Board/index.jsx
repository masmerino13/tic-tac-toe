import React, { Component } from 'react';

import { BoardWrapper } from './board.styled';
import Scores from '../Scores';
import Config from '../Config';
import Squares from '../Squares';

class Board extends Component {
  state = {
    size: 3,
    squares: Array(9).fill(null) // 3x3
  }

  render() {
    const { size, squares } = this.state;

    return (
      <BoardWrapper>
        <Scores scoreX={ 5 } />
        <Config defaultSize={ size } />
        <Squares columns={ size } squares={ squares } onClicked={() => console.log('clic')} />
      </BoardWrapper>
    )
  }
}

export default Board;
