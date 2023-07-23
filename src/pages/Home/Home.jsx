import NavigateButton from 'components/NavigateButton';
import TechnologiesSection from 'components/TechnologiesSection';
import { MainTitle, MainWrap, SecondTitle } from './Home.styled';

const Home = () => {
  return (
    <MainWrap>
      <MainTitle>Greetings!</MainTitle>
      <SecondTitle>
        Welcome to your new contact management platform, where you can
        conveniently store and access all your contacts from any device.
      </SecondTitle>
      <SecondTitle>Are you ready to get started?</SecondTitle>
      <NavigateButton />
      <TechnologiesSection />
    </MainWrap>
  );
};

export default Home;
