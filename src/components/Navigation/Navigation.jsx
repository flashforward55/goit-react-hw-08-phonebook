import { useSelector } from 'react-redux';
import { selectAuth } from 'redux/selector';
import { AppBar, AppBarItem, AppBarList, NavTitle } from './Navigation.styled';

const Navigation = () => {
  const { isLoggedIn } = useSelector(selectAuth);

  return (
    <AppBar>
      <AppBarList>
        <AppBarItem>
          <NavTitle to="/">Home</NavTitle>
        </AppBarItem>
        {isLoggedIn && (
          <AppBarItem>
            <NavTitle to="/contacts">Contacts</NavTitle>
          </AppBarItem>
        )}
      </AppBarList>
    </AppBar>
  );
};

export default Navigation;
