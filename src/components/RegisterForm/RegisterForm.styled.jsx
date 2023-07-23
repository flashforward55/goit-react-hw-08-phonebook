import styled from 'styled-components';

export const ClassicFormStyle = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 320px;
  margin: 0 auto;
  padding: 32px;
  background-color: #f0f4f8;
  border: 2px solid #082911;
  border-radius: 8px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
`;

export const ClassicButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
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

export const AppRegistrationIconWrapper = styled.span`
  margin-left: 5px;
`;
