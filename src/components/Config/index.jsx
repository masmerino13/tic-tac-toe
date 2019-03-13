import React from 'react';

import { ConfigWrapper } from './config.styled';

const Config = ({ defaultSize, onSizeChange, onStart, readonly, draw, z, x }) => {
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
        <button className={ `btn ${ readonly ? '' : 'btn btn-play' }` } onClick={onStart} disabled={ readonly }>
        {
          draw > 0
          || z > 0
          || x > 0
          ? 'Play again'
          : 'Play now'
        }
        </button>
      </label>
    </ConfigWrapper>
  );
};

export default Config
