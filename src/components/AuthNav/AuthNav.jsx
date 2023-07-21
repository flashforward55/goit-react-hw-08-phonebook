import { AuthList, AuthListItem, AuthTitle } from './AuthNav.styled';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import LoginIcon from '@mui/icons-material/Login';
import styled from 'styled-components';

export const AuthNav = () => {
  return (
    <AuthList>
      <AuthListItem>
        <AuthTitle to="/register">
          Register<StyledAppRegistrationIcon />
        </AuthTitle>
      </AuthListItem>
      <AuthListItem>
        <AuthTitle to="/login">
          Log In<StyledLoginIcon />
        </AuthTitle>
      </AuthListItem>
    </AuthList>
  );
};

const StyledAppRegistrationIcon = styled(AppRegistrationIcon)`
  margin-left: 5px;
`;

const StyledLoginIcon = styled(LoginIcon)`
  margin-left: 5px;

`;
