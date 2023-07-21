import { useSelector } from "react-redux";
import { selectAuth } from "redux/selector";
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Navigation = () => {
  const { isLoggedIn } = useSelector(selectAuth);

  return (
    <nav>
      <AppBarList>
        <AppBarItem>
          <NavTitle to="/" end>Home</NavTitle>
        </AppBarItem>
        {isLoggedIn === true &&
          <AppBarItem>
            <NavTitle to="/contacts">Contacts</NavTitle>
          </AppBarItem>}
      </AppBarList>
    </nav>
  );
};

export const AppBarList = styled.ul`
    display: flex;
    justify-content: center;
`;

export const AppBarItem = styled.li`
    cursor: pointer;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover {
        transform: scale(1.15);
        text-shadow: 0px 5px 10px bisque;
    }
    &:not(:first-child) {
        margin-left: 16px;
    }
`;

export const NavTitle = styled(NavLink)`
    font-weight: 500;
    font-size: 32px;
    color: #fff;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &.active {
        color: bisque;
    }
`;
