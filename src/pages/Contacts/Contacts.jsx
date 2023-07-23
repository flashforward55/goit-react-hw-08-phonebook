import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import Loading from 'components/Loading';
import { useSelector } from 'react-redux';
import { selectContacts, selectIsLoading } from 'redux/selector';
import {
  MainTitle,
  SecondTitle,
  SectionContainer,
  WarningMessage,
} from './Contacts.styled';

export const Contacts = () => {
  const loading = useSelector(selectIsLoading);
  const contacts = useSelector(selectContacts);

  return (
    <>
      <SectionContainer>
        <MainTitle>Phonebook</MainTitle>
        <ContactForm />
      </SectionContainer>
      <SectionContainer>
        <SecondTitle>My Contacts</SecondTitle>
        <Filter />
        {loading && <Loading />}
        <ContactList />
        {contacts.length === 0 && (
          <WarningMessage>Please add new contact</WarningMessage>
        )}
      </SectionContainer>
    </>
  );
};
