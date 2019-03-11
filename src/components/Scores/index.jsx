import React from 'react';

import { ScoresWrapper, ScorePlayerBox } from './scores.styled';

const Scores = ({ whoIsNext, scoreX = 0, score0 = 0, draws = 0}) => {
  return (
    <ScoresWrapper>
      <ScorePlayerBox className={ `${ whoIsNext === 'x' ? 'active' : '' }` }>
        <h1>{ scoreX }</h1>
        <div className="label">Player X</div>
      </ScorePlayerBox>
      <ScorePlayerBox>
        <h1>{ draws }</h1>
        <div className="label">Draw</div>
      </ScorePlayerBox>
      <ScorePlayerBox className={ `${ whoIsNext === '0' ? 'active' : '' }` }>
        <h1>{ score0 }</h1>
        <div className="label">Player 0</div>
      </ScorePlayerBox>
    </ScoresWrapper>
  )
}

export default Scores;
