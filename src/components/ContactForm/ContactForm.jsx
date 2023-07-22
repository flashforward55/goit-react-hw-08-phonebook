import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selector';
import { addNewContact } from 'redux/api/contactsApi';
import { toastWarnDuplicate } from 'components/services/toasts';
import {
  PersonIconStyle,
  LocalPhoneIconStyle,
} from 'components/icons/icons.styled';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import styled from 'styled-components';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const onSubmitForm = event => {
    event.preventDefault();
    const checkContact = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (checkContact === true) {
      reset();
      return toastWarnDuplicate(name);
    }
    const newContact = {
      name,
      number,
    };
    dispatch(addNewContact(newContact));
    reset();
  };
  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <ClassicFormStyle onSubmit={onSubmitForm}>
      <ClassicLabelForm>
        Name
        <ClassicInputForm
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={event => setName(event.target.value)}
        />
        <PersonIconStyle />
      </ClassicLabelForm>
      <ClassicLabelForm>
        Number
        <ClassicInputForm
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={event => setNumber(event.target.value)}
        />
        <LocalPhoneIconStyle />
      </ClassicLabelForm>
      <ClassicButton type="submit">
        Add contact
        <AddIcCallIcon sx={{ marginLeft: '5px' }} />
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
  border-radius: 4px;
`;

export const ClassicLabelForm = styled.label`
  position: relative;
  font-weight: 500;
  font-size: 16px;
  color: #fff;
`;

export const ClassicInputForm = styled.input`
  display: block;
  width: 240px;
  padding-top: 11px;
  padding-bottom: 11px;
  padding-left: 35px;
  margin-top: 4px;
  outline: none;
  border: 2px solid #082911;
  border-radius: 4px;

  &:first-child {
    margin-bottom: 16px;
  }
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
