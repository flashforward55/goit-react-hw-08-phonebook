import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavigateLink = ({ way, text }) => {
  const word = way.slice(1, way.length);

  return (
    <SecondTitle>
      {text} <NavToLink to={way}>{word}</NavToLink>?
    </SecondTitle>
  );
};

export const NavToLink = styled(NavLink)`
    color: bisque;
`;

export const SecondTitle = styled.h2`
    text-align: center;
    margin-bottom: 16px;
    color: #fff;
    margin-top: 8px;
`;
