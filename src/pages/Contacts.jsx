import styled from 'styled-components';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Loading } from 'components/Loading';
import { useSelector } from 'react-redux';
import { selectContacts, selectIsLoading } from 'redux/selector';

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

const SectionContainer = styled.section`
  padding: 20px;
  background-color: #f0f4f8;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const MainTitle = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  color: #3f51b5;
  font-size: 32px;
`;

const SecondTitle = styled.h2`
  text-align: center;
  margin-bottom: 16px;
  color: #3f51b5;
  font-size: 24px;
`;

const WarningMessage = styled.p`
  text-align: center;
  font-weight: 500;
  font-size: 18px;
  color: #082911;
  margin-top: 20px;
`;
