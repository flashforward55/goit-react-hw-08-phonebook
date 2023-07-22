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
  justify-content: center;
  align-items: center;
  padding: 12px;
  border: none;
  border-radius: 4px;
  background-color: #3f51b5;
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: #b53f51;
  }
`;

const StyledReplyIcon = styled(ReplyIcon)`
  margin-left: 5px;
`;
