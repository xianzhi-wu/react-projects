import styled from "styled-components";

// const Button = styled.div`
//   width: 100%;
//   height: 0.8rem;
// 	line-height: 0.8rem;
// 	text-align: center;
// 	color: #fff;
// 	background: #d9521a;
// 	border-radius: 0.08rem;
// 	font-size: 0.36rem;
// `;
//Why does using button have a top margin?

const Button = styled.button`
  display: block;
  width: 100%;
  height: 0.8rem;
  line-height: 0.8rem;
  text-align: center;
  color: #fff;
  background: #d9521a;
  border-radius: 0.08rem;
  font-size: 0.36rem;
`;

export default function ConfirmBtn({ children, action }) {
  return <Button onClick={action}>{ children }</Button>
}