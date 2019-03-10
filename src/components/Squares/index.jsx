import React from 'react';
import { chain } from 'lodash';

import { SquaresWrapper, SquareWrapper } from './squares.styled';

const Square = ({ i }) => {
  return (
    <SquareWrapper></SquareWrapper>
  );
}

const Squares = ({ columns, squares, onClicked }) => {
  const flexBasis = 100/columns;
  const groups = chain(squares)
    .map((v, i) => i)
    .chunk(columns)
    .value();

  return (
    <SquaresWrapper flexBasis={ flexBasis }>
      {
        groups.map((value, key) => (
          <div key={key} className="squares-row">
            {
              value.map((value, k) => (
                <Square key={value} index={value} />
              ))
            }
          </div>
        ))
      }
    </SquaresWrapper>
  )
}

export default Squares
