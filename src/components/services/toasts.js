import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const toastSettings = {
    theme: "colored",
};

export const toastSuccessAdd = () => {
    return toast.success("Hooray! A new contact has been created 🤗", toastSettings);
};
export const toastSuccessDelete = () => {
    return toast.success("Okay, contact has been deleted 👌", toastSettings);
};
export const toastWarnDuplicate = name => {
    return toast.warn(`Sorry, ${name} is already in contacts, try adding someone else 🙈`, toastSettings);
};
export const toastWarnEmptyField = () => {
    return toast.warn(`Wow dude, it looks like you didn't enter anything in one or more of the form fields 🤔`, toastSettings);
};
export const toastError = () => {
    return toast.error("Oops, something went wrong, please try again 🙊", toastSettings);
};
export const toastSuccessRegister = () => {
    return toast.success("Done! You have successfully created an account! Get ready to work  🎉", toastSettings);
};
export const toastSuccessLogIn = () => {
    return toast.success("Hello! Nice to meet you again! Ready to work with your contacts? 🏋️‍♂️", toastSettings);
};
export const toastSuccessLogOut = () => {
    return toast.success("We hope you made it in time. See you soon 👋", toastSettings);
};