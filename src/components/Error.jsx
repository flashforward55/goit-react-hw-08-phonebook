import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectAuth } from 'redux/selector';
import ReplyIcon from '@mui/icons-material/Reply';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Error = ({ errorImg, children }) => {
  const { isLoggedIn } = useSelector(selectAuth);

  return (
    <ErrorSection>
      <img
        src={errorImg}
        alt="Wow dude, try one more time"
        width="1000px"
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

export const ErrorSection = styled.section`
  text-align: center;
  padding: 8px;
  img {
    padding-bottom: 16px;
    display: block;
    margin: 0 auto;
  }
`;

Error.propTypes = {
  errorImg: PropTypes.string.isRequired,
};

export const NavButton = styled(NavLink)`
  display: inline-flex;
  padding: 8px;
  border-radius: 8px;
  border: 2px solid #082911;
  color: bisque;
  background-color: #082911;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: #082911;
    background-color: bisque;
  }
`;

const StyledReplyIcon = styled(ReplyIcon)`
  margin-left: 5px;
`;
