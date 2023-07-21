import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavigateLink = ({ way, text }) => {
  const word = way.slice(1, way.length);

  return (
    <h2 style={{ marginTop: '8px' }}>
      {text} <NavToLink to={way}>{word}</NavToLink>?
    </h2>
  );
};

export const NavToLink = styled(NavLink)`
  color: bisque;
`;
