import { LoginForm } from 'components/LoginForm';
import { NavigateLink } from 'components/NavigateLink';

export const Login = () => {
  return (
    <section>
      <h2>If you have an account, please login</h2>
      <LoginForm />
      <NavigateLink way={'/register'} text={'Or maybe wanna'} />
    </section>
  );
};
