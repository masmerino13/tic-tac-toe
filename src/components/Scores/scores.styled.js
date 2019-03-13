import styled, { keyframes } from 'styled-components';

const winner = keyframes`
  {
    0%{
        background-color: #fdfdfd;
        color: #000;
        }
    25%{
        background: #8bc34a;
        color: #fff;
        }
    40%{
        background-color: #fdfdfd;
        color: #000;
        }
    60%{
        background: #8bc34a;
        color: #fff;
        }
    100%{
        background: #fdfdfd;
        color: #000;
        }
  }
`;

const ScoresWrapper = styled.div`
  display: flex;
  justify-content: center;

  .active {
    border-color: #0959e4;

    .label {
      color: #0959e4;
    }
  }

  .winner {
    animation: ${ winner } 1s 1 0s linear;
  }
`;

const ScorePlayerBox = styled.div`
  padding: 0.5rem 1.5rem;
  margin: 0 0.3rem;
  background-color: #fdfdfd;
  border: 2px solid #dcdcdc;
  text-align: center;

  .label {
    font-size: 1rem;
  }
`;

export {
  ScoresWrapper,
  ScorePlayerBox
};