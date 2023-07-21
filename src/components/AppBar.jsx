import { Navigation } from './Navigation';
import { AuthNav } from './AuthNav/AuthNav';
import { UserMenu } from './UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectAuth } from 'redux/selector';
import { MobMenu } from './MobMenu/MobMenu';
import { UserAuthWrap } from './GlobalStyles';

export const AppBar = () => {
  const { isLoggedIn } = useSelector(selectAuth);

  return (
    <header>
      <Navigation />
      <MobMenu />
      <UserAuthWrap>{isLoggedIn ? <UserMenu /> : <AuthNav />}</UserAuthWrap>
    </header>
  );
};
