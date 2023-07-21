import { NavigateButton } from "components/NavigateButton";
import styled from 'styled-components';

export const Home = () => {
  return (
    <MainWrap>
      <MainTitle>Hello there!</MainTitle>
      <SecondTitle>It seems that you have finally found a site where you can conveniently store all your contacts and have access to them from any device</SecondTitle>
      <SecondTitle>Ready to work? </SecondTitle>
      <NavigateButton />
    </MainWrap>);
};

const SecondTitle = styled.h2`
  margin-top: 30px;
`;

export const MainWrap = styled.div`
    margin-top: 126px;
    text-align: center;
`;

export const MainTitle = styled.h1`
    text-align: center;
    margin-bottom: 32px;
    color: #fff;
`;
