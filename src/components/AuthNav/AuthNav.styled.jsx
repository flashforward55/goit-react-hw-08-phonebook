import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const AuthList = styled.ul`
  display: flex;
  justify-content: center;
`;

export const AuthListItem = styled.li`
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  }
  &:not(:last-child) {
    margin-right: 16px;
  }
`;

export const AuthTitle = styled(NavLink)`
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 16px;
  color: #fff;
  text-decoration: none;
  padding: 8px;
  border-radius: 4px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: #082911;
    background-color: rgba(255, 228, 196, 0.8);
  }

  &.active {
    color: #082911;
    background-color: bisque;
  }
`;
