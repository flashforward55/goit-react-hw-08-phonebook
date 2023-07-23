import { selectFilteredContacts, selectAuth } from 'redux/selector';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/api/contactsApi';
import ContactItemEntrails from './ContactItemEntrails';
import { ContactListStyle, ContactListItem } from './ContactList.styled';

const ContactList = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector(selectAuth);
  const filteredContacts = useSelector(selectFilteredContacts);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchContacts());
    }
  }, [isLoggedIn, dispatch]);

  return (
    <ContactListStyle>
      {filteredContacts.map(({ id, name, number }) => {
        return (
          <ContactListItem key={id}>
            <ContactItemEntrails id={id} name={name} number={number} />
          </ContactListItem>
        );
      })}
    </ContactListStyle>
  );
};

export default ContactList;
