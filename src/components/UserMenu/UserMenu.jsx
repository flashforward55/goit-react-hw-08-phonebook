import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { logOutUser } from 'redux/operations/userOperations';
import { selectAuth } from 'redux/selector';
import { AvatarStyle } from 'components/icons/icons.styled';
import { LogoutIconStyle } from 'components/icons/icons.styled';

export const UserMenu = ({ handleToggleShow }) => {
  const dispatch = useDispatch();
  const { user } = useSelector(selectAuth);

  const userMainLetter = user.email.slice(0, 1).toUpperCase();
  const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

  return (
    <div>
      <AvatarStyle letter={userMainLetter} color={randomColor} />
      <p>{user.email}</p>
      <button type="button" onClick={() => dispatch(logOutUser())}>
        Log Out
        <LogoutIconStyle />
      </button>
    </div>
  );
};

UserMenu.propTypes = {
  handleToggleShow: PropTypes.func,
};
