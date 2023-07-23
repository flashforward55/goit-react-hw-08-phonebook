import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

export const NavButton = styled(NavLink)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 12px 24px;
  border-radius: 8px;
  border: 2px solid #3f51b5;
  color: bisque;
  background-color: #3f51b5;
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: #5c6bc0;
    background-color: rgba(255, 228, 196, 0.8);
  }
`;

export const StyledRocketLaunchIcon = styled(RocketLaunchIcon)`
  margin-left: 8px;
  font-size: 24px;
`;
