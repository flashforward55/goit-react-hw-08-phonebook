import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import LoginIcon from '@mui/icons-material/Login';

export const AuthNav = () => {
  return (
    <ul>
      <li>
        <AuthTitle to="/register">
          Register
          <AppRegistrationIcon sx={{ marginLeft: '5px' }} />
        </AuthTitle>
      </li>
      <li>
        <AuthTitle to="/login">
          Log In
          <LoginIcon sx={{ marginLeft: '5px' }} />
        </AuthTitle>
      </li>
    </ul>
  );
};

export const AuthTitle = styled(NavLink)`
  display: flex;
  font-weight: 500;
  font-size: 16px;
  color: #fff;
  &.active {
    color: bisque;
  }
`;
