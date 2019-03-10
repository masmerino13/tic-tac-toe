import React from 'react';

import { ConfigWrapper } from './config.styled';

const Config = ({ defaultSize, onSizeChange }) => {
  return (
    <ConfigWrapper>
      <label>
        Size: <input type="number" min="3" max="30" value={defaultSize} onChange={onSizeChange} />
      </label>
      <label>
        <button className="btn btn-play" onClick={() => console.log('game started')}>Play now</button>
      </label>
      <label>
        <button className="btn btn-restart" onClick={() => console.log('game started')}>Restart</button>
      </label>
    </ConfigWrapper>
  );
};

export default Config
