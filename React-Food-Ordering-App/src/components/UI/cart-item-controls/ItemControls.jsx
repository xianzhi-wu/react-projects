import styled from "styled-components";

const ItemControls = styled.div`
  display: flex;
  width: 1.6rem;
  height: 0.6rem;
  line-height: 0.6rem;
  border-radius: 0.3rem;
  background-color: #f2f2f2;
`;

const Amount = styled.div`
  flex: 1;
  font-size: 0.3rem;
  color: #000;
  text-align: center;
`;

export { ItemControls, Amount };