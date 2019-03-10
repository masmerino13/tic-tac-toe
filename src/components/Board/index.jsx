import React, { Component } from 'react';

import { BoardWrapper } from './board.styled';
import Scores from '../Scores';
import Config from '../Config';

class Board extends Component {
  render() {
    return (
      <BoardWrapper>
        <Scores scoreX={5} />
        <Config defaultSize={3} />
      </BoardWrapper>
    )
  }
}

export default Board;
