import { configureStore } from "@reduxjs/toolkit";
import * as rp from 'redux-persist'
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { phonebookUserReducer } from "./slices/userSlice";
import { phonebookContactsReducer } from "./slices/contactsSlice";

const persistConfig = {
  key: 'phonebook',
  storage,
  whitelist: ['token'],
};

export const persistedUserReducer = persistReducer(persistConfig, phonebookUserReducer);

export const store = configureStore({
  reducer: {
    user: persistedUserReducer,
    contacts: phonebookContactsReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [rp.FLUSH, rp.REHYDRATE, rp.PAUSE, rp.PERSIST, rp.PURGE, rp.REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = rp.persistStore(store);
