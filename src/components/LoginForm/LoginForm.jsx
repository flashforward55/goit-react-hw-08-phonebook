import { useDispatch } from 'react-redux';
import { logInUser } from 'redux/api/userApi';
import EmailField from 'components/FormFields/EmailField';
import PasswordField from 'components/FormFields/PasswordField';
import { toastWarnEmptyField } from 'services/toasts';
import {
  ClassicButton,
  ClassicFormStyle,
  StyledLoginIcon,
} from './LoginForm.styled';

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmitLogIn = e => {
    e.preventDefault();
    const { email, password } = e.target.elements;

    if (!email.value || !password.value) {
      return toastWarnEmptyField();
    }

    dispatch(
      logInUser({
        email: email.value,
        password: password.value,
      })
    );

    e.target.reset();
  };

  return (
    <ClassicFormStyle onSubmit={handleSubmitLogIn} autoComplete="on">
      <EmailField />
      <PasswordField />
      <ClassicButton type="submit">
        Log In
        <StyledLoginIcon />
      </ClassicButton>
    </ClassicFormStyle>
  );
};

export default LoginForm;
