import styled from 'styled-components';

const ScoresWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const ScorePlayerBox = styled.div`
  padding: 0.5rem 1.5rem;
  margin: 0 0.3rem;
  background-color: #fdfdfd;
  border: 1px solid #dcdcdc;
  text-align: center;

  .label {
    font-size: 1rem;
  }
`;

export {
  ScoresWrapper,
  ScorePlayerBox
};