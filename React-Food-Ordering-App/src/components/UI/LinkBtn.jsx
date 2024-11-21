import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  height: 0.8rem;
  line-height: 0.8rem;
  text-align: center;
  color: #fff;
  border-radius: 0.08rem;
  font-size: 0.36rem;
  width: 2.4rem;
  background: #66c0ff;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;

  &:hover {
    background: #559fd6;
  }
`;

const LinkBtn = ({ to, children }) => {
  return (
    <StyledLink to={to}>
      {children}
    </StyledLink>
  );
};

export default LinkBtn;