import { useState } from "react";
import { VisibilityIconStyle, VisibilityOffIconStyle, ButtonForVisibility, KeyIconStyle } from "../icons/icons.styled";
import styled from 'styled-components';

export const PasswordField = () => {
  const [passwordShown, setPasswordShown] = useState(false);

  return (
    <ClassicLabelForm>
      Password
      <ClassicInputForm type={passwordShown ? "text" : "password"} name="password" />
      <KeyIconStyle />
      <ButtonForVisibility type="button" onClick={() => setPasswordShown(!passwordShown)}>
        {passwordShown ? <VisibilityOffIconStyle /> : <VisibilityIconStyle />}
      </ButtonForVisibility>
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
