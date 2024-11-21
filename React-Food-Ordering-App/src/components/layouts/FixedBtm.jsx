import styled from "styled-components";

const FixedBtmWrap = styled.div`
  position: fixed;
  z-index: 9996;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #000;
  padding: 0.2rem;
  user-select: none;

  ${(props) => 
    (props.$flex && `
      display: flex;
      justify-content: space-between;
      gap: 0.2rem;
    `)
  }
`;

const FixedBtmPlaceHolder = styled.div`
  position: relative;
  height: 1.2rem;
`;

// export default function FixedBtm({ children }) {
//   return <FixedBtmDiv>{children}</FixedBtmDiv>;
// }

export default function FixedBtm({ children, $flex = false }) {
  console.log($flex)

  return (
    <FixedBtmPlaceHolder>
      <FixedBtmWrap $flex={$flex}>
        {children}
      </FixedBtmWrap>
    </FixedBtmPlaceHolder>
  );
}