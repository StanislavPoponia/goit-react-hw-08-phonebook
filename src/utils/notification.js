import { toast } from 'react-toastify';

export const loginError = () => toast.error('Sorry, wrong email or password');

export const registerError = () =>
  toast.error('Incorrect data entered');

export const serverError = () =>
  toast.error('Sorry, something wrong, please try again');

export const notifyAddContact = () => toast.success('Contact added');

export const notifyDeliteContact = () => toast.info('Contact deleted');

export const notifyUpdateContact = () =>
  toast.success('The contact has been updated');