import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const LinkContainer = styled.p`
  text-align: center;
  margin-top: 30px;
`;

export const NavToLink = styled(NavLink)`
  color: #3f51b5;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #5c6bc0;
  }
`;
