import {
  AuthList,
  AuthListItem,
  AuthTitle,
  StyledAppRegistrationIcon,
  StyledLoginIcon,
} from './AuthNav.styled';

const AuthNav = () => {
  return (
    <AuthList>
      <AuthListItem>
        <AuthTitle to="/register">
          Register
          <StyledAppRegistrationIcon />
        </AuthTitle>
      </AuthListItem>
      <AuthListItem>
        <AuthTitle to="/login">
          Log In
          <StyledLoginIcon />
        </AuthTitle>
      </AuthListItem>
    </AuthList>
  );
};

export default AuthNav;
