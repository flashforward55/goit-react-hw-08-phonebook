import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';
import { Loading } from 'components/Loading';
import { useSelector } from 'react-redux';
import { selectContacts, selectIsLoading } from 'redux/selector';

export const Contacts = () => {
  const loading = useSelector(selectIsLoading);
  const contacts = useSelector(selectContacts);

  return (
    <>
      <section>
        <h1>Ready to add new people?</h1>
        <ContactForm />
      </section>
      <section>
        <h2>My Contacts</h2>
        <Filter />
        {loading === true && <Loading />}
        <ContactList />
        {contacts.length === 0 && (
          <p>
            Looks like you don`t have any contacts yet or just clear them all.
            Please add new contact🤔
          </p>
        )}
      </section>
    </>
  );
};
