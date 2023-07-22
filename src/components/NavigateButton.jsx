import { useSelector } from "react-redux";
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