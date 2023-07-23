import RegisterForm from 'components/RegisterForm';
import { NavigateLink } from 'components/NavigateLink';
import { SecondTitle, StyledSection } from './Register.styled';

const Register = () => {
  return (
    <StyledSection>
      <SecondTitle>If you are new, please register</SecondTitle>
      <RegisterForm />
      <NavigateLink way={'/login'} text={'Or maybe wanna'} />
    </StyledSection>
  );
};

export default Register;
