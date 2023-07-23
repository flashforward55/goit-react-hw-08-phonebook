import Navigation from '../Navigation';
import { AuthNav } from '../AuthNav/AuthNav';
import { UserMenu } from '../UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectAuth } from 'redux/selector';
import { MobMenu } from '../MobMenu/MobMenu';
import { StyledHeader, UserAuthWrap } from './AppBar.styled';

const AppBar = () => {
  const { isLoggedIn } = useSelector(selectAuth);

  return (
    <StyledHeader>
      <Navigation />
      <MobMenu />
      <UserAuthWrap>{isLoggedIn ? <UserMenu /> : <AuthNav />}</UserAuthWrap>
    </StyledHeader>
  );
};

export default AppBar;
