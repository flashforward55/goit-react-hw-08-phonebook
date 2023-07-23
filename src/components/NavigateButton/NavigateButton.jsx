import { useSelector } from 'react-redux';
import { selectAuth } from 'redux/selector';
import { NavButton, StyledRocketLaunchIcon } from './NavigateButton.styled';

 const NavigateButton = () => {
  const { isLoggedIn } = useSelector(selectAuth);

  return (
    <NavButton to={isLoggedIn ? '/contacts' : '/register'}>
      {isLoggedIn ? 'Go to Contacts' : "Let's Get Started"}
      <StyledRocketLaunchIcon />
    </NavButton>
  );
};

export default NavigateButton
