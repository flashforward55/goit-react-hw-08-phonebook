import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { logOutUser } from 'redux/api/userApi';
import { selectAuth } from 'redux/selector';
import { AvatarStyle } from 'components/icons/icons.styled';
import { LogoutIconStyle } from 'components/icons/icons.styled';
import { MobButtonForLogOut } from 'components/MobMenu/MobMenu.styled';
import { UserMenuDiv, UserName, ButtonForLogOut } from './UserMenu.styled';

const UserMenu = ({ handleToggleShow }) => {
  const dispatch = useDispatch();
  const { user } = useSelector(selectAuth);

  const userMainLetter = user.name.slice(0, 1).toUpperCase();
  const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

  return (
    <UserMenuDiv>
      <AvatarStyle letter={userMainLetter} color={randomColor} />
      <UserName>{user.name}</UserName>
      <ButtonForLogOut type="button" onClick={() => dispatch(logOutUser())}>
        Log Out
        <LogoutIconStyle />
      </ButtonForLogOut>
      <MobButtonForLogOut
        type="button"
        onClick={() => {
          dispatch(logOutUser());
          handleToggleShow();
        }}
      >
        Log Out
        <LogoutIconStyle />
      </MobButtonForLogOut>
    </UserMenuDiv>
  );
};

UserMenu.propTypes = {
  handleToggleShow: PropTypes.func,
};

export default UserMenu;
