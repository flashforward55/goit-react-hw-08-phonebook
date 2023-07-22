import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export const NavigateLink = ({ way, text }) => {
  const word = way.slice(1);

  return (
    <LinkContainer>
      {text} <NavToLink to={way}>{word}</NavToLink>?
    </LinkContainer>
  );
};

const LinkContainer = styled.p`
  text-align: center;
  margin-top: 30px;
`;

const NavToLink = styled(NavLink)`
  color: #3f51b5;
  font-weight: bold;
  text-decoration: none;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #5c6bc0;
  }
`;

NavigateLink.propTypes = {
  way: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
