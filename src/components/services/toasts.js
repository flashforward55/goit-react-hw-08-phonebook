import toast from 'react-hot-toast';

export const toastSuccessAdd = () => {
  return toast.success("Cheers, new contact has been created 🤗", { duration: 3000 });
};
export const toastSuccessDelete = () => {
  return toast.success("Okay, contact has been deleted 👌", { duration: 3000 });
};
export const toastWarnDuplicate = name => {
  return toast.error(`Number: ${name} is already in phonebook`);
};
export const toastWarnEmptyField = () => {
  return toast.error(`Please, fill in the form fields`);
};
export const toastError = () => {
  return toast.error("Oops, something went wrong, please try again");
};
export const toastSuccessRegister = () => {
  return toast.success("Done! You have successfully created an account!", { duration: 3000 });
};
export const toastSuccessLogIn = () => {
  return toast.success("Hello! Nice to meet you again!", { duration: 3000 });
};




