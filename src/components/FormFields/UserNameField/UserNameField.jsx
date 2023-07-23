import { PersonIconStyle } from '../../icons/icons.styled';
import { ClassicInputForm, ClassicLabelForm } from './UserNameField.styled';

const UserNameField = () => {
  return (
    <ClassicLabelForm>
      Username
      <ClassicInputForm type="text" name="name" />
      <PersonIconStyle />
    </ClassicLabelForm>
  );
};

export default UserNameField;
