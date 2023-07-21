import { RegisterForm } from 'components/RegisterForm';
import { NavigateLink } from 'components/NavigateLink';

export const Register = () => {
  return (
    <section>
      <h2>If you are new, please register 💁‍♂️</h2>
      <RegisterForm />
      <NavigateLink way={'/login'} text={'Or maybe wanna'} />
    </section>
  );
};
