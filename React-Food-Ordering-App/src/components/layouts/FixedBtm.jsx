import styled from "styled-components";

const FixedBtmDiv = styled.div`
  position: fixed;
  z-index: 9999;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #000;
  padding: 0.2rem;
`;

export default function FixedBtm({ children }) {
  return <FixedBtmDiv>{children}</FixedBtmDiv>;
}