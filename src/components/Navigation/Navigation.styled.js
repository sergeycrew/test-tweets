import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  color: #454545;
  padding: 5px 0;
  margin: 16px 0;
  text-decoration: none;
  font-weight: 700;
  font-size: 19px;
  &.active {
    border-bottom: 1px solid #454545;
    text-shadow: 0px 2px 17px rgba(246, 246, 246, 1);
  }
  &.active:hover {
    border-bottom: 1px solid #471ca9;
  }
  :hover {
    transform: scaleX(1);
    color: #471ca9;
  }
`;

export const Nav = styled.nav`
  display: flex;
  column-gap: 20px;
`;
