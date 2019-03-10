import styled from 'styled-components';

const ConfigWrapper = styled.div`
  padding: 0.3rem 0;
  display: flex;
  justify-content: center;
  align-items: center;

  label {
    margin: 0 0.5rem;
  }

  .btn-play {
    color: #ffffff;
    border-color: #25d600;
    background-image: linear-gradient(to top, #25d600, #29d203, #2dcf05, #30cb08, #33c80a);
  }

  .btn-restart {
    color: #ffffff;
    border-color: #0070d6;
    background-image: linear-gradient(to top, #0070d6, #0076d4, #007cd0, #0081cd, #0a86c8);
  }
`;

export {
  ConfigWrapper
};