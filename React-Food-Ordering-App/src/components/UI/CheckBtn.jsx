import styled from "styled-components";

const Button = styled.button`
  width: 1.8rem;
	height: 0.7rem;
	line-height: 0.7rem;
	background: #fff;
	color: #d9521a;
	font-size: 0.28rem;
	text-align: center;
	border-radius: 0.1rem;
`;

export default function CheckBtn({ children, action }) {
  return <Button onClick={action}>{children}</Button>;
}