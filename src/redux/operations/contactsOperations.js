import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";


axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

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
  async (credentials, { rejectWithValue }) => {
    try {
      const contacts = await axios.post('/contacts', credentials);

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
