import React, { Component } from 'react';
import { chain, chunk } from 'lodash';

import { parseArrayVertically, diagonally } from '../utils';
import { BoardWrapper } from './board.styled';
import Scores from '../Scores';
import Config from '../Config';
import Squares from '../Squares';

class Board extends Component {
  state = {
    size: 3,
    squares: Array(9).fill(null), // 3X3
    whoIsNext: 'x', // X start by default
    whoWon: null,
    playing: false,
    steps: 0, // default
    scores: {
      x: 0,
      z: 0,
      draw: 0
    }
  }

  checkWinner = isFinished => {
    const { size, squares } = this.state,
      winPathX = 'xxx',
      winPath0 = 'zzz',
      horizontal = chain(squares)
        .chunk(size)
        .map(group => group.join(''))
        .value(),
      vertical = parseArrayVertically({ array: squares, size }).map(group => group.join('')),
      diagonallyTopLeft = diagonally({ array: chunk(squares, size), size }),
      diagonallyBottomTop = diagonally({ array: chunk(squares, size), size, bottomToTop: true }),
      results = []
        .concat(horizontal)
        .concat(vertical)
        .concat(diagonallyTopLeft)
        .concat(diagonallyBottomTop);

    results.forEach(path => {
      if (path.includes(winPathX)) {
        this.setWinner('x');
      } else if (path.includes(winPath0)) {
        this.setWinner('z');
      }
    });

    if (isFinished) {
      this.setWinner('draw');
    }
  }

  setWinner(winner) {
    const { scores, whoWon } = this.state;

    if (whoWon) return;

    scores[winner] += 1;

    this.setState({
      playing: false,
      whoWon: winner,
      scores
    });
  }

  restart() {
    const { size } = this.state;
    const nSquares = size * size;

    this.setState({
      squares: Array(nSquares).fill(null),
      whoWon: null
    });
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
    const { whoIsNext, squares, steps, whoWon } = this.state;
    const stepsCounter = steps + 1;

    squares[square] = whoIsNext;

    this.setState({
      whoIsNext: whoIsNext === 'x' ? 'z' : 'x',
      squares,
      steps: stepsCounter
    });

    // -- calculate the winner
    if(squares.length === squares.filter(square => square).length && !whoWon)
    {
      this.checkWinner(true);
      return;
    }

    this.checkWinner();
    // --
  }

  handleGameStart = () => {
    this.restart();

    this.setState({
      playing: true
    });
  }

  render() {
    const {
      size,
      squares,
      whoIsNext,
      whoWon,
      playing,
      scores
    } = this.state;

    return (
      <BoardWrapper>
        <Scores
          whoWon={ whoWon }
          whoIsNext={ whoIsNext }
          { ...scores } />
        <Config
          defaultSize={ size }
          onSizeChange={ this.handleSizeChange }
          onStart={ this.handleGameStart }
          readonly={ playing }
          { ...scores } />
        <Squares
          columns={ size }
          squares={ squares }
          readonly={ !playing }
          onClicked={ this.handlePlayerTurn } />
      </BoardWrapper>
    )
  }
}

export default Board;
