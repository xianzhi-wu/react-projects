import styled from "styled-components";

const FixedBtmWrap = styled.div`
  position: fixed;
  z-index: 9999;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #000;
  padding: 0.2rem;
`;

const FixedBtmPlaceHolder = styled.div`
  position: relative;
  height: 1.2rem;
`;

// export default function FixedBtm({ children }) {
//   return <FixedBtmDiv>{children}</FixedBtmDiv>;
// }

export default function FixedBtm({children}) {
  return (
    <FixedBtmPlaceHolder>
      <FixedBtmWrap>
        {children}
      </FixedBtmWrap>
    </FixedBtmPlaceHolder>
  );
}