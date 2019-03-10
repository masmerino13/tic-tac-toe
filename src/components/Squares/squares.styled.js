import styled from 'styled-components';

const SquaresWrapper = styled.div`
  display: flex;
  justify-content : space-between;
  background: #ffffff;
  border: 1px solid #f3f3f3;
  padding: 0.3rem;
  flex-direction: column;

  .squares-row {
    display: flex;
    flex-direction: row;
    justify-content : space-between;
  }
`;

const SquareWrapper = styled.span`
  padding: 2px;
  border: 1px solid #f3f3f3;
  font-size: 3rem;
  padding-bottom: 10%;
  text-align: center;
  flex-basis: ${ props => props.flexBasis }%;
`;

export {
  SquaresWrapper,
  SquareWrapper
};