import { useDispatch } from 'react-redux';
import { logInUser } from 'redux/operations/userOperations';
import { EmailField } from 'components/FormFields/EmailField';
import { PasswordField } from 'components/FormFields/PasswordField';
import LoginIcon from '@mui/icons-material/Login';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmitLogIn = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    if (email === '' || password === '') {
      return;
    }
    dispatch(
      logInUser({
        email,
        password,
      })
    );
    form.reset();
  };

  return (
    <form onSubmit={handleSubmitLogIn} autoComplete="on">
      <EmailField />
      <PasswordField />
      <button type="submit">
        Log In
        <LoginIcon sx={{ marginLeft: '5px' }} />
      </button>
    </form>
  );
};
