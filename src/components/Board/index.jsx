import React, { Component } from 'react';

import { BoardWrapper } from './board.styled';
import Scores from '../Scores';
import Config from '../Config';
import Squares from '../Squares';

class Board extends Component {
  state = {
    size: 3,
    squares: Array(9).fill(null), // 3X3
    whoIsNext: 'x' // X start by default
  }

  handleSizeChange = (e) => {
    const { value } = e.target;
    const nSquares = value * value;

    this.setState({
      size: value,
      squares: Array(nSquares).fill(null) // sizeXsize
    });
  }

  handlePlayerTurn = (square) => {
    const { whoIsNext, squares } = this.state;

    squares[square] = whoIsNext;

    this.setState({
      whoIsNext: whoIsNext === 'x' ? '0' : 'x',
      squares
    });
  }

  render() {
    const { size, squares, whoIsNext } = this.state;

    return (
      <BoardWrapper>
        <Scores whoIsNext={ whoIsNext } scoreX={ 5 } />
        <Config defaultSize={ size } onSizeChange={ this.handleSizeChange } />
        <Squares columns={ size } squares={ squares } onClicked={this.handlePlayerTurn} />
      </BoardWrapper>
    )
  }
}

export default Board;
