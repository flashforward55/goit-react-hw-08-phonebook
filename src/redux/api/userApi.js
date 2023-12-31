import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toastSuccessRegister, toastSuccessLogIn, toastError } from "services/toasts";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};
export const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const registerUser = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const res = await axios.post('/users/signup', credentials);
      toastSuccessRegister();
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      toastError();
      return rejectWithValue(error);
    };
  }
);

export const logInUser = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const res = await axios.post('/users/login', credentials);
      toastSuccessLogIn();
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      toastError();
      return rejectWithValue(error);
    };
  }
);

export const logOutUser = createAsyncThunk('auth/logout', async (_, { rejectWithValue }) => {
  try {
    await axios.post('/users/logout');
    clearAuthHeader();
  } catch (error) {
    toastError();
    return rejectWithValue(error.message);
  };
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, { rejectWithValue, getState }) => {
    const state = getState();
    const persistedToken = state.user.token;
    if (persistedToken === null) {
      return rejectWithValue('Unable to fetch user');
    };
    try {
      setAuthHeader(persistedToken);
      const res = await axios.get('/users/current');
      return res.data;
    } catch (error) {
      toastError();
      return rejectWithValue(error.message);
    };
  }
);
