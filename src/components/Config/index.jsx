import React from 'react';

import { ConfigWrapper } from './config.styled';

const Config = ({ defaultSize, onSizeChange, onStart, readonly }) => {
  return (
    <ConfigWrapper>
      <label>
        Size: <input
          type="number"
          min="3"
          max="30"
          value={defaultSize}
          onChange={onSizeChange}
          disabled={ readonly } />
      </label>
      <label>
        <button className={ `btn ${ readonly ? '' : 'btn btn-play' }` } onClick={onStart} disabled={ readonly }>Play now</button>
      </label>
      <label>
        <button className={ `btn ${ readonly ? '' : 'btn btn-restart' }` } onClick={() => console.log('game started')} disabled={ readonly }>Restart</button>
      </label>
    </ConfigWrapper>
  );
};

export default Config
