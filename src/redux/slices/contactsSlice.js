import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchContacts, addNewContact, deleteContact } from "../operations/contactsOperations";

const phonebookContactsSlice = createSlice({
  name: "contacts",
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
      .addCase(addNewContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = state.items.filter((item) => item.id !== action.payload.id);
      })
      .addMatcher(isAnyOf(fetchContacts.pending, addNewContact.pending, deleteContact.pending), (state) => {
        state.isLoading = true;
      })
      .addMatcher(isAnyOf(fetchContacts.rejected, addNewContact.rejected, deleteContact.rejected), (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const { setFilter } = phonebookContactsSlice.actions;
export const phonebookContactsReducer = phonebookContactsSlice.reducer;
