import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/api/contactsApi';
import DeleteIcon from '@mui/icons-material/Delete';
import {
  ButtonForDelete,
  ContactNumber,
  ContactWrapper,
} from './ContactItemEntrails.styled';

const ContactItemEntrails = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <ContactWrapper>
      <ContactNumber>
        {name}: {number}
      </ContactNumber>
      <ButtonForDelete
        type="button"
        onClick={() => dispatch(deleteContact(id))}
      >
        <DeleteIcon />
      </ButtonForDelete>
    </ContactWrapper>
  );
};

ContactItemEntrails.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactItemEntrails;
