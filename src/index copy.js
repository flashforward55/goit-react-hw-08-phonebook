//index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import App from 'components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// axiosApi.js
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://64ac4c9c9edb4181202f6743.mockapi.io';

export const fetchContacts = createAsyncThunk("contacts/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await axios.get('/contacts');
      return contacts.data;
    } catch (error) {
      throw rejectWithValue(error);
    };
  }
);

export const addContact = createAsyncThunk("contacts/addContact",
  async ({ name, phone, id }, { rejectWithValue }) => {
    try {
      const contacts = await axios.post('/contacts', { name, phone, id });
      return contacts.data;
    } catch (error) {
      throw rejectWithValue(error);
    };
  }
);

export const deleteContact = createAsyncThunk("contacts/deleteContact",
  async (id, { rejectWithValue }) => {
    try {
      const contacts = await axios.delete(`/contacts/${id}`);
      return contacts.data;
    } catch (error) {
      throw rejectWithValue(error);
    };
  }
);

// selectors.js
import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = state => state.contacts.items;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectFilter = state => state.contacts.filter;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }
);

//slice.js
import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./axiosApi";

const phonebookSlice = createSlice({
  name: "phonebook",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    filter: "",
  },
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },

  extraReducers: (builder) =>
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = state.items.filter((item) => item.id !== action.payload.id);
      })
      .addMatcher(isAnyOf(fetchContacts.pending, addContact.pending, deleteContact.pending), (state) => {
        state.isLoading = true;
      })
      .addMatcher(isAnyOf(fetchContacts.rejected, addContact.rejected, deleteContact.rejected), (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const { setFilter } = phonebookSlice.actions;
export const phonebookReducer = phonebookSlice.reducer;

//store.js
import { configureStore } from "@reduxjs/toolkit";
import { phonebookReducer } from "./slice";

export const store = configureStore({
  reducer: {
    contacts: phonebookReducer,
  },
});

//App.jsx
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectIsLoading, selectError } from 'redux/selectors';
import { fetchContacts } from 'redux/axiosApi';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import Loading from './Loading';
import { AppContainer, Phonebook, Title } from './App.styled';

function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <AppContainer>
      <Phonebook>Phonebook</Phonebook>
      <ContactForm />
      <Title>Contacts</Title>
      {contacts.length ? (
        <>
          <Filter />
          <ContactList />
          {loading && <Loading />}
        </>
      ) : loading ? (
        <Loading />
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <p>Please add new contact</p>
      )}
    </AppContainer>
  );
}

export default App;

//Loading.jsx
import PropTypes from 'prop-types';
import { Oval } from 'react-loader-spinner';
import { LoaderWrapper } from './Loading.styled';

const Loading = ({
  color,
  height,
  width,
  secondaryColor,
  strokeWidth,
  strokeWidthSecondary,
}) => (
  <LoaderWrapper>
    <Oval
      color={color}
      secondaryColor={secondaryColor}
      height={height}
      width={width}
      strokeWidth={strokeWidth}
      strokeWidthSecondary={strokeWidthSecondary}
    />
  </LoaderWrapper>
);

Loading.propTypes = {
  color: PropTypes.string.isRequired,
  secondaryColor: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  strokeWidth: PropTypes.string.isRequired,
  strokeWidthSecondary: PropTypes.string.isRequired,
};

Loading.defaultProps = {
  color: '#fff',
  secondaryColor: '#00BFFF',
  height: '40',
  width: '40',
  strokeWidth: '4',
  strokeWidthSecondary: '4',
};

export default Loading;

//Filter.jsx
import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from 'redux/selectors';
import { setFilter } from 'redux/slice';
import { Label, FilterInput } from './Filter.styled';

const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  return (
    <Label>
      Filter contacts by name
      <FilterInput
        type="text"
        name="filter"
        title="The ability to filter the contact book"
        required
        value={filter}
        onChange={event => dispatch(setFilter(event.target.value))}
      />
    </Label>
  );
};

export default Filter;

//ContactList.jsx
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/selectors';
import ContactListItems from './ContactListItems';
import { ContactListContainer } from './ContactList.styled';

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  return (
    <ContactListContainer>
      {filteredContacts.length ? (
        filteredContacts.map(({ id, name, phone }) => (
          <ContactListItems key={id} id={id} name={name} phone={phone} />
        ))
      ) : (
        <p>No contacts</p>
      )}
    </ContactListContainer>
  );
};

export default ContactList;

//ContactListItems.jsx
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/axiosApi';
import {
  ContactListItem,
  ContactName,
  ContactNumber,
  DeleteButton,
} from './ContactListItems.styled';

const ContactListItems = ({ id, name, phone }) => {
  const dispatch = useDispatch();

  return (
    <ContactListItem id={id}>
      <ContactName>{name}</ContactName>
      <ContactNumber>{phone}</ContactNumber>

      <DeleteButton
        type="submit"
        aria-label="Delete contact"
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </DeleteButton>
    </ContactListItem>
  );
};

ContactListItems.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

export default ContactListItems;

//ContactForm.jsx
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/axiosApi';
import { Form, Input, Button } from './ContactForm.styled';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const onSubmitForm = event => {
    event.preventDefault();
    if (checkIfContactExists()) {
      reset();
      return alert(`Number: ${name} is already in phonebook`);
    }
    addNewContact();
  };
  const checkIfContactExists = () =>
    contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase());

  const addNewContact = () => {
    const newContact = {
      name,
      phone,
    };
    dispatch(addContact(newContact));
    reset();
  };
  const reset = () => {
    setName('');
    setPhone('');
  };

  return (
    <Form onSubmit={onSubmitForm}>
      <Input
        type="text"
        value={name}
        onChange={event => setName(event.target.value)}
        name="name"
        placeholder="Name"
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <Input
        type="tel"
        value={phone}
        onChange={event => setPhone(event.target.value)}
        name="phone"
        placeholder="Phone number"
        pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <Button type="submit">Add Contact</Button>
    </Form>
  );
};

export default ContactForm;

Книга контактов
Добавь в приложение «Книга контактов» возможность регистрации, логина и обновления пользователя, а также работу с приватной коллекцией контактов.

  Бэкенд
Для этого задания есть готовый бэкенд.Ознакомься с документацией(https://connections-api.herokuapp.com/docs/).Он поддерживает все необходимые операции с коллекцией контактов, а так же регистрацию, логин и обновление пользователя при помощи JWT.Используй его вместо твоего бэкенда созданного через сервис mockapi.io.

    Маршрутизация
Добавь маршрутизацию с библиотекой React Router.В приложении должно быть несколько страниц:

    /register - публичный маршрут регистрации нового пользователя с формой
    / login - публичный маршрут логина существующего пользователя с формой
    / contacts - приватный маршрут для работы со списком контактов пользователя

Добавь компонент навигации Navigation со ссылками для перехода по маршрутам.
Меню пользователя

Создай компонент UserMenu, отображающий почту пользователя и кнопку выхода из учетной записи.Вот как может выглядеть его разметка.

< div >
  <p>mango@mail.com</p>
  <button>Logout</button>
</ >

    Стилизация
Это финальная версия приложения, поэтому поработай над оформлением интерфейса.Можно использовать библиотеку стилизации или компонентов, например Chakra UI(https://chakra-ui.com/) или Material UI(https://mui.com/).
