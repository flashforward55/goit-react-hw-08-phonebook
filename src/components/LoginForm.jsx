import { useDispatch } from 'react-redux';
import { logInUser } from 'redux/operations/userOperations';
import { EmailField } from 'components/FormFields/EmailField';
import { PasswordField } from 'components/FormFields/PasswordField';
import { toastWarnEmptyField } from 'components/services/toasts';
import LoginIcon from '@mui/icons-material/Login';
import styled from 'styled-components';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmitLogIn = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    if (email === "" || password === "") {
      return toastWarnEmptyField();
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
    <ClassicFormStyle onSubmit={handleSubmitLogIn} autoComplete="on">
      <EmailField />
      <PasswordField />
      <ClassicButton type="submit">Log In<StyledLoginIcon /></ClassicButton>
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
    border:2px solid #082911;
    border-radius: 4px;
`;

export const ClassicButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  border: 2px solid #082911;
  border-radius: 4px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  color: #decea9;
  background-color: #082911;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    transform: scale(1.15);
    color: #082911;
    background-color: #decea9;
  }
`;


const StyledLoginIcon = styled(LoginIcon)`
  margin-left: 5px;
`;
