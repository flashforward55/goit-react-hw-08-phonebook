import { EmailIconStyle } from "../icons/icons.styled";
import styled from 'styled-components';

export const EmailField = () => {
  return (
    <ClassicLabelForm>
      Email
      <ClassicInputForm type="email" name="email" />
      <EmailIconStyle />
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
