import styled from 'styled-components';
import { ContactForm } from "components/ContactForm/ContactForm";
import { ContactList } from "components/ContactList/ContactList";
import { Filter } from "components/Filter/Filter";
import { Loading } from "components/Loading";
import { useSelector } from "react-redux";
import { selectContacts, selectIsLoading } from "redux/selector";

export const Contacts = () => {
  const loading = useSelector(selectIsLoading);
  const contacts = useSelector(selectContacts);

  return (
    <>
      <SectionContainer>
        <MainTitle>Ready to add new people? 👀</MainTitle>
        <ContactForm />
      </SectionContainer>
      <SectionContainer>
        <SecondTitle>My Contacts 🕺💃</SecondTitle>
        <Filter />
        {loading === true && <Loading />}
        <ContactList />
        {contacts.length === 0 && <WarningMessage>Looks like you don`t have any contacts yet or just clear them all. Please add new contact🤔</WarningMessage>}
      </SectionContainer>
    </>
  );
};

const SectionContainer = styled.section`
  margin-bottom: 5px;
`;

export const MainTitle = styled.h1`
    text-align: center;
    margin-bottom: 32px;
    color: #fff;
`;

export const SecondTitle = styled.h2`
    text-align: center;
    margin-bottom: 16px;
    color: #fff;
`;

export const WarningMessage = styled.p`
    text-align: center;
    font-weight: 500;
    font-size: 16px;
    color: #082911;
`;
