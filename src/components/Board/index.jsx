import React, { Component } from 'react';

import { BoardWrapper } from './board.styled';
import Scores from '../Scores';
import Config from '../Config';
import Squares from '../Squares';

class Board extends Component {
  state = {
    size: 3,
    squares: Array(9).fill(null) // 3X3
  }

  handleSizeChange = (e) => {
    const { value } = e.target;
    const nSquares = value * value;

    this.setState({
      size: value,
      squares: Array(nSquares).fill(null) // sizeXsize
    });
  }

  render() {
    const { size, squares } = this.state;

    return (
      <BoardWrapper>
        <Scores scoreX={ 5 } />
        <Config defaultSize={ size } onSizeChange={ this.handleSizeChange } />
        <Squares columns={ size } squares={ squares } onClicked={() => console.log('clic')} />
      </BoardWrapper>
    )
  }
}

export default Board;
