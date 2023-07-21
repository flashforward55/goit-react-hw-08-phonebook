import { useState } from 'react';

import {
  VisibilityIconStyle,
  VisibilityOffIconStyle,
} from '../icons/icons.styled';

export const PasswordField = () => {
  const [passwordShown, setPasswordShown] = useState(false);

  return (
    <label>
      Password
      <input type={passwordShown ? 'text' : 'password'} name="password" />
      <button type="button" onClick={() => setPasswordShown(!passwordShown)}>
        {passwordShown ? <VisibilityOffIconStyle /> : <VisibilityIconStyle />}
      </button>
    </label>
  );
};
