import styled from 'styled-components';
import { AuthListItem, AuthTitle } from 'components/AuthNav/AuthNav.styled';

export const MobMenuWrap = styled.div`
  position: fixed;
  background-color: #3f51b5;
  background-image: linear-gradient(
    335deg,
    rgba(0, 0, 0, 0.5) 0%,
    rgba(94, 94, 98, 0.5) 100%
  );
  z-index: 1;
  width: 100vw;
  height: 100vh;
  overflow: auto;
  top: 0;
  left: 0;
  padding-top: 88px;
  padding-bottom: 58px;
`;

export const MobMenuOpenButton = styled.button`
  justify-content: center;
  align-items: center;
  border: 2px solid #082911;
  border-radius: 4px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  color: #decea9;
  background-color: #3f51b5;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: #3f51b5;
    background-color: #decea9;
  }
  display: none;
  @media (max-width: 768px) {
    display: block;
    padding: 0;
    margin-top: 2px;
    height: 40px;
    color: #fff;
  }
`;

export const MobMenuCloseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    transform: scale(1.15);
    color: #082911;
    background-color: #decea9;
  }
  padding: 0;
  height: 40px;
  position: absolute;
  top: 20px;
  right: 19px;
  color: #fff;
  background-color: transparent;
  outline: none;
  border: none;
`;

export const MobAuthList = styled.ul`
  width: 400px;
  height: 100%;
  margin: 0 auto;
`;

export const MobAuthListItem = styled(AuthListItem)`
  &:not(:last-child) {
    @media (max-width: 768px) {
      margin-bottom: 16px;
    }
  }
`;

export const MobAuthTitle = styled(AuthTitle)`
  align-items: center;
  font-weight: 700;
  font-size: 32px;
`;

export const MobButtonForLogOut = styled.button`
  justify-content: center;
  align-items: center;
  padding: 8px;
  border: 2px solid #082911;
  border-radius: 4px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  color: #decea9;
  background-color: #3f51b5;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: #082911;
    background-color: #decea9;
  }
  display: none;
  @media (max-width: 768px) {
    display: flex;
    color: #082911;
    background-color: #e2e5e5;
  }
`;
