import { useDispatch } from 'react-redux';
import { logInUser } from 'redux/api/userApi';
import { EmailField } from 'components/FormFields/EmailField';
import { PasswordField } from 'components/FormFields/PasswordField';
import { toastWarnEmptyField } from 'components/services/toasts';
import LoginIcon from '@mui/icons-material/Login';
import styled from 'styled-components';

export const LoginForm = () => {
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

export const ClassicFormStyle = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 280px;
  margin: 0 auto;
  padding: 32px;
  border: 2px solid #082911;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #f0f4f8;
`;

export const ClassicButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  color: #ffffff;
  background-color: #3f51b5;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: #b53f51;
  }
`;

const StyledLoginIcon = styled(LoginIcon)`
  margin-left: 5px;
  font-size: 24px;
  color: #ffffff;
`;
