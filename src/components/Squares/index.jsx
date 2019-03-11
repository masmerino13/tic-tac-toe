import React from 'react';
import { chain } from 'lodash';

import { SquaresWrapper, SquareWrapper } from './squares.styled';

const Square = ({ index, flexBasis, value, onClick }) => {
  return (
    <SquareWrapper flexBasis={flexBasis} onClick={value ? null : () => onClick(index)}>{ value }</SquareWrapper>
  );
}

const Squares = ({ columns, squares, readonly, onClicked }) => {
  const flexBasis = 100/columns;
  const groups = chain(squares)
    .map((v, i) => i)
    .chunk(columns)
    .value();

  return (
    <SquaresWrapper flexBasis={ flexBasis } >
      {
        groups.map((value, key) => (
          <div key={key} className="squares-row">
            {
              value.map((value, k) => (
                <Square
                  key={ value }
                  index={ value }
                  flexBasis={ flexBasis }
                  value={ squares[value] }
                  onClick={ readonly ? () => { return } : onClicked } />
              ))
            }
          </div>
        ))
      }
    </SquaresWrapper>
  )
}

export default Squares
