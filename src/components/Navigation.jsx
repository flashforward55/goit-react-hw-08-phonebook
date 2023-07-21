import { useSelector } from 'react-redux';
import { selectAuth } from 'redux/selector';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  const { isLoggedIn } = useSelector(selectAuth);

  return (
    <nav>
      <ul>
        <li>
          <NavTitle to="/" end>
            Home
          </NavTitle>
        </li>
        {isLoggedIn === true && (
          <li>
            <NavTitle to="/contacts">Contacts</NavTitle>
          </li>
        )}
      </ul>
    </nav>
  );
};

export const NavTitle = styled(NavLink)`
  font-weight: 500;
  font-size: 32px;
  color: #fff;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &.active {
    color: bisque;
  }
`;
