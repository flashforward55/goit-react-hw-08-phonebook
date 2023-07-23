import { useDispatch } from 'react-redux';
import { registerUser } from 'redux/api/userApi';
import UserNameField from 'components/FormFields/UserNameField';
import EmailField from 'components/FormFields/EmailField';
import PasswordField from 'components/FormFields/PasswordField';
import { toastWarnEmptyField } from 'components/services/toasts';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import {
  AppRegistrationIconWrapper,
  ClassicButton,
  ClassicFormStyle,
} from './RegisterForm.styled';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const { name, email, password } = e.target.elements;

    if (!name.value || !email.value || !password.value) {
      return toastWarnEmptyField();
    }

    dispatch(
      registerUser({
        name: name.value,
        email: email.value,
        password: password.value,
      })
    );

    e.target.reset();
  };

  return (
    <ClassicFormStyle onSubmit={handleSubmit} autoComplete="on">
      <UserNameField />
      <EmailField />
      <PasswordField />
      <ClassicButton type="submit">
        Register
        <AppRegistrationIconWrapper>
          <AppRegistrationIcon />
        </AppRegistrationIconWrapper>
      </ClassicButton>
    </ClassicFormStyle>
  );
};

export default RegisterForm;
