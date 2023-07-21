import { RegisterForm } from "components/RegisterForm";
import { NavigateLink } from "components/NavigateLink";
import styled from 'styled-components';

export const Register = () => {
  return (
    <StyledSection>
      <SecondTitle>If you are new, please register 💁‍♂️</SecondTitle>
      <RegisterForm />
      <NavigateLink way={"/login"} text={"Or maybe wanna"} />
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
