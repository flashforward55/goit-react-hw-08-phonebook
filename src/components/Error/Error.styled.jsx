import ReplyIcon from '@mui/icons-material/Reply';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const ErrorSection = styled.section`
  text-align: center;
  padding: 8px;
  img {
    padding-bottom: 16px;
    display: block;
    margin: 0 auto;
  }
`;

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

export const StyledReplyIcon = styled(ReplyIcon)`
  margin-left: 5px;
`;
