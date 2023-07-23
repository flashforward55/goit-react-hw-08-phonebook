import { useSelector } from 'react-redux';
import { selectAuth } from 'redux/selector';
import Navigation from 'components/Navigation';
import AuthNav from 'components/AuthNav';
import UserMenu from 'components/UserMenu';
import { MobMenu } from 'components/MobMenu/MobMenu';
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
