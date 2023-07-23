import { LoginForm } from 'components/LoginForm';
import { NavigateLink } from 'components/NavigateLink';
import { SecondTitle, StyledSection } from './Login.styled';

const Login = () => {
  return (
    <StyledSection>
      <SecondTitle>If you have an account, please login</SecondTitle>
      <LoginForm />
      <NavigateLink way={'/register'} text={'Or maybe wanna'} />
    </StyledSection>
  );
};

export default Login;
