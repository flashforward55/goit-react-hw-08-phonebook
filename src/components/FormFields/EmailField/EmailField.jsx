import { EmailIconStyle } from '../../icons/icons.styled';
import { ClassicInputForm, ClassicLabelForm } from './EmailField.styled';

 const EmailField = () => {
  return (
    <ClassicLabelForm>
      Email
      <ClassicInputForm type="email" name="email" />
      <EmailIconStyle />
    </ClassicLabelForm>
  );
};

export default EmailField
