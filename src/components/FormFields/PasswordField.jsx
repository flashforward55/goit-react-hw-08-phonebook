import { useState } from 'react';

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
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

export const VisibilityIconStyle = () => (
  <VisibilityIcon sx={{ fill: '#082911' }} />
);

export const VisibilityOffIconStyle = () => (
  <VisibilityOffIcon sx={{ fill: '#082911' }} />
);
