import { LoginForm } from "components/LoginForm";
import { NavigateLink } from "components/NavigateLink";
import styled from 'styled-components';

export const Login = () => {
  return (
    <StyledSection>
      <SecondTitle>If you have an account, please login 🙋‍♂️</SecondTitle>
      <LoginForm />
      <NavigateLink way={"/register"} text={"Or maybe wanna"} />
    </StyledSection>
  );
};

const StyledSection = styled.section`
  margin-top: 7px;
`;

export const SecondTitle = styled.h2`
    text-align: center;
    margin-bottom: 16px;
    color: #fff;
`;
