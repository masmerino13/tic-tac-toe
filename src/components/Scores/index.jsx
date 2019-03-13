import React from 'react';

import { ScoresWrapper, ScorePlayerBox } from './scores.styled';

const Scores = ({ whoWon, whoIsNext, x = 0, z = 0, draw = 0}) => {
  return (
    <ScoresWrapper>
      <ScorePlayerBox className={ `${ whoIsNext === 'x' ? 'active' : '' } ${ whoWon === 'x' ? 'winner' : '' }` }>
        <h1>{ x }</h1>
        <div className="label">Player X</div>
      </ScorePlayerBox>
      <ScorePlayerBox>
        <h1>{ draw }</h1>
        <div className="label">Draw</div>
      </ScorePlayerBox>
      <ScorePlayerBox className={ `${ whoIsNext === 'z' ? 'active' : '' } ${ whoWon === 'z' ? 'winner' : '' }` }>
        <h1>{ z }</h1>
        <div className="label">Player 0</div>
      </ScorePlayerBox>
    </ScoresWrapper>
  )
}

export default Scores;
