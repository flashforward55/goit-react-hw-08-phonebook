/* import { NavigateButton } from 'components/NavigateButton';
import styled from 'styled-components';

export const Home = () => {
  return (
    <MainWrap>
      <MainTitle>Greetings!</MainTitle>
      <SecondTitle>
        Welcome to your new contact management platform, where you can
        conveniently store and access all your contacts from any device.
      </SecondTitle>
      <SecondTitle>Are you ready to get started?</SecondTitle>
      <NavigateButton />
    </MainWrap>
  );
};

const SecondTitle = styled.h2`
  margin-top: 30px;
  margin-bottom: 30px;
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
 */
import { NavigateButton } from 'components/NavigateButton';
import styled from 'styled-components';

export const Home = () => {
  return (
    <MainWrap>
      <MainTitle>Greetings!</MainTitle>
      <SecondTitle>
        Welcome to your new contact management platform, where you can
        conveniently store and access all your contacts from any device.
      </SecondTitle>
      <SecondTitle>Are you ready to get started?</SecondTitle>
      <NavigateButton />
    </MainWrap>
  );
};

const MainWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`;

const MainTitle = styled.h1`
  font-size: 36px;
  font-weight: bold;
  color: #3f51b5;
  margin-bottom: 16px;
`;

const SecondTitle = styled.h2`
  font-size: 24px;
  font-weight: normal;
  color: #333;
  text-align: center;
  margin-bottom: 16px;
`;
