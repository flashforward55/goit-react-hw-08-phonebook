import { RegisterForm } from 'components/RegisterForm';
import { NavigateLink } from 'components/NavigateLink';
import styled from 'styled-components';

export const Register = () => {
  return (
    <StyledSection>
      <SecondTitle>If you are new, please register</SecondTitle>
      <RegisterForm />
      <NavigateLink way={'/login'} text={'Or maybe wanna'} />
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
