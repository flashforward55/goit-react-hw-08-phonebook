import { useDispatch } from 'react-redux';
import { registerUser } from 'redux/operations/userOperations';
import { ClassicButton } from 'components/GlobalStyles';
import { UserNameField } from 'components/FormFields/UserNameField';
import { EmailField } from 'components/FormFields/EmailField';
import { PasswordField } from 'components/FormFields/PasswordField';

import AppRegistrationIcon from '@mui/icons-material/AppRegistration';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    if (name === '' || email === '' || password === '') {
      return;
    }
    dispatch(
      registerUser({
        name,
        email,
        password,
      })
    );
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="on">
      <UserNameField />
      <EmailField />
      <PasswordField />
      <ClassicButton type="submit">
        Register
        <AppRegistrationIcon sx={{ marginLeft: '5px' }} />
      </ClassicButton>
    </form>
  );
};
