import styled from 'styled-components';

export const UserMenuDiv = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const UserEmail = styled.p`
  font-weight: 500;
  font-size: 16px;
  color: bisque;
  margin-right: 16px;
  cursor: pointer;
  @media (max-width: 768px) {
    margin-top: 16px;
    margin-bottom: 16px;
  }
`;

export const ButtonForLogOut = styled.button`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    color: #082911;
    background-color: #e2e5e5;
  }
  justify-content: center;
  align-items: center;
  padding: 12px;
  border: 2px solid #082911;
  border-radius: 4px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  color: #decea9;
  background-color: #082911;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: #082911;
    background-color: #decea9;
  }
`;
