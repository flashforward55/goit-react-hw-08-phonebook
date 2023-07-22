/* import { useSelector } from "react-redux";
import { selectAuth } from "redux/selector";
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavigateButton = () => {
  const { isLoggedIn } = useSelector(selectAuth);

  return (
    <NavButton to={isLoggedIn ? "/contacts" : "/register"}>
      Let`s go<StyledRocketLaunchIcon />
    </NavButton>
  );
};

export const NavButton = styled(NavLink)`
  display: inline-flex;
  padding: 8px;
  border-radius: 8px;
  border: 2px solid #082911;
  color: bisque;
  background-color: #082911;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: #082911;
    background-color: bisque;
  }
`;

const StyledRocketLaunchIcon = styled(RocketLaunchIcon)`
  margin-left: 5px;
`;
 */

import { useSelector } from 'react-redux';
import { selectAuth } from 'redux/selector';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavigateButton = () => {
  const { isLoggedIn } = useSelector(selectAuth);

  return (
    <NavButton to={isLoggedIn ? '/contacts' : '/register'}>
      {isLoggedIn ? 'Go to Contacts' : "Let's Get Started"}
      <StyledRocketLaunchIcon />
    </NavButton>
  );
};

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

const StyledRocketLaunchIcon = styled(RocketLaunchIcon)`
  margin-left: 8px;
  font-size: 24px;
`;
