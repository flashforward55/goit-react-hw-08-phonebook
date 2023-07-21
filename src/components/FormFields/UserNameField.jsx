import { PersonIconStyle } from "../icons/icons.styled";
import styled from 'styled-components';

export const UserNameField = () => {
  return (
    <ClassicLabelForm>
      Username
      <ClassicInputForm type="text" name="name" />
      <PersonIconStyle />
    </ClassicLabelForm>
  );
};

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

export const ClassicLabelForm = styled.label`
    position: relative;
    font-weight: 500;
    font-size: 16px;
    color: #fff;
`;
