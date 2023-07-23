import { useState } from 'react';
import {
  VisibilityIconStyle,
  VisibilityOffIconStyle,
  ButtonForVisibility,
  KeyIconStyle,
} from '../../icons/icons.styled';
import { ClassicInputForm, ClassicLabelForm } from './PasswordField.styled';

const PasswordField = () => {
  const [passwordShown, setPasswordShown] = useState(false);

  return (
    <ClassicLabelForm>
      Password
      <ClassicInputForm
        type={passwordShown ? 'text' : 'password'}
        name="password"
      />
      <KeyIconStyle />
      <ButtonForVisibility
        type="button"
        onClick={() => setPasswordShown(!passwordShown)}
      >
        {passwordShown ? <VisibilityOffIconStyle /> : <VisibilityIconStyle />}
      </ButtonForVisibility>
    </ClassicLabelForm>
  );
};

export default PasswordField;
