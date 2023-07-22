import { useDispatch } from 'react-redux';
import { registerUser } from 'redux/api/userApi';
import { UserNameField } from 'components/FormFields/UserNameField';
import { EmailField } from 'components/FormFields/EmailField';
import { PasswordField } from 'components/FormFields/PasswordField';
import { toastWarnEmptyField } from 'components/services/toasts';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import styled from 'styled-components';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    if (name === '' || email === '' || password === '') {
      return toastWarnEmptyField();
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

const ClassicFormStyle = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 320px;
  margin: 0 auto;
  padding: 32px;
  background-color: #f0f4f8;
  border: 2px solid #082911;
  border-radius: 8px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
`;

const ClassicButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  border: none;
  border-radius: 4px;
  background-color: #3f51b5;
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: #b53f51;
  }
`;

const AppRegistrationIconWrapper = styled.span`
  margin-left: 5px;
`;
