import React, { Component } from 'react';
import { chain } from 'lodash'

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
      zero: 0,
      draw: 0
    }
  }

  checkWinner = isFinished => {
    const { size, squares } = this.state;
    const winPathX = 'xxx';
    const winPath0 = 'zerozerozero';
    const horizontal = chain(squares)
      .chunk(size)
      .map(group => group.join(''))
      .value();

    horizontal.forEach(path => {
      if (path.includes(winPathX)) {
        this.setWinner('x');
      } else if (path.includes(winPath0)) {
        this.setWinner('zero');
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

    console.log('winner', winner);
    console.log('whoWon', whoWon);

    this.setState({
      playing: false,
      whoWon: winner,
      scores
    });

    //this.restart();
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
      whoIsNext: whoIsNext === 'x' ? 'zero' : 'x',
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
      playing,
      scores
    } = this.state;

    return (
      <BoardWrapper>
        <Scores
          whoIsNext={ whoIsNext }
          { ...scores } />
        <Config
          defaultSize={ size }
          onSizeChange={ this.handleSizeChange }
          onStart={ this.handleGameStart }
          readonly={ playing } />
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
