import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const AppBar = styled.nav`
  padding: 16px;
`;

export const AppBarList = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const AppBarItem = styled.li`
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  }
  &:not(:first-child) {
    margin-left: 24px;
  }
`;

export const NavTitle = styled(NavLink)`
  font-weight: 500;
  font-size: 20px;
  color: #fff;
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 4px;
  transition: all 0.3s ease-in-out;
  &.active {
    background-color: rgba(255, 228, 196, 0.8);
    color: #3f51b5;
  }
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;
