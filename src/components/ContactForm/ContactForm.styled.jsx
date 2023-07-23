import styled from 'styled-components';

export const ClassicFormStyle = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 280px;
  margin: 0 auto;
  padding: 32px;
  border: 2px solid #082911;
  border-radius: 4px;
`;

export const ClassicLabelForm = styled.label`
  position: relative;
  font-weight: 500;
  font-size: 16px;
  color: #082911;
`;

export const ClassicInputForm = styled.input`
  display: block;
  width: 240px;
  padding-top: 11px;
  padding-bottom: 11px;
  padding-left: 35px;
  margin-top: 4px;
  outline: none;
  border: 2px solid #082911;
  border-radius: 4px;

  &:first-child {
    margin-bottom: 16px;
  }
`;

export const ClassicButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  border: 2px solid #3f51b5;
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
`;
