import { Navigation } from './Navigation';
import { AuthNav } from './AuthNav/AuthNav';
import { UserMenu } from './UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectAuth } from 'redux/selector';

export const AppBar = () => {
  const { isLoggedIn } = useSelector(selectAuth);

  return (
    <header>
      <Navigation />

      <div>{isLoggedIn ? <UserMenu /> : <AuthNav />}</div>
    </header>
  );
};
