import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectAuth } from 'redux/selector';
import { ErrorSection, NavButton, StyledReplyIcon } from './Error.styled';

const Error = ({ errorImg, children }) => {
  const { isLoggedIn } = useSelector(selectAuth);

  return (
    <ErrorSection>
      <img
        src={errorImg}
        alt="Wow, try one more time"
        width="768px"
        heigth="700px"
      />
      {children}
      <NavButton to={isLoggedIn ? '/contacts' : '/'}>
        Go back
        <StyledReplyIcon />
      </NavButton>
    </ErrorSection>
  );
};

Error.propTypes = {
  errorImg: PropTypes.string.isRequired,
};

export default Error
