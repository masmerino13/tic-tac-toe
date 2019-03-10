import styled from 'styled-components';

const SquaresWrapper = styled.div`
  display: flex;
  justify-content : space-between;
  background: #ffffff;
  border: 1px solid #f3f3f3;
  padding: 0.3rem;

  .squares-row {
    display: flex;
    flex-direction: column;
    justify-content : space-between;
    flex-basis: ${ props => props.flexBasis }%;
  }
`;

const SquareWrapper = styled.span`
  padding: 2px;
  border: 1px solid #f3f3f3;
  font-size: 3rem;
  padding-bottom: 25%;
  padding-top: 25%;
  text-align: center;
`;

export {
  SquaresWrapper,
  SquareWrapper
};