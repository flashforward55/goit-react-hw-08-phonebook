import { LoginForm } from 'components/LoginForm';
import { NavigateLink } from 'components/NavigateLink';
import styled from 'styled-components';

export const Login = () => {
  return (
    <StyledSection>
      <SecondTitle>If you have an account, please login</SecondTitle>
      <LoginForm />
      <NavigateLink way={'/register'} text={'Or maybe wanna'} />
    </StyledSection>
  );
};

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`;

const SecondTitle = styled.h2`
  font-size: 28px;
  font-weight: normal;
  color: #3f51b5;
  margin-bottom: 16px;
`;
