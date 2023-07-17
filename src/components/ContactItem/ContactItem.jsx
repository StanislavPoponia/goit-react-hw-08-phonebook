import { PropTypes } from 'prop-types';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

import ButtonStyled from '../Button/ButtonStyled';
import {
  useDeleteContactMutation,
  
} from 'redux/contactsSlice';
import css from './ContactItem.module.css';

  const ContactItem = ({ id, name, number }) => {
  const [deleteContact, { isLoading: isDeleting, isSuccess: isDeleted }] =
    useDeleteContactMutation();
 
  useEffect(() => {
    if (isDeleted) {
      toast.success('Contact has been deleted!');
    }
   
  }, [isDeleted]);

  const handleDeleteClick = () => { 
      deleteContact(id); };
  return (
    <li className={css.contactItem}>
   {(
        <>
          <span>{name}:</span> 
          <span>{number}</span>
          <div>
            <ButtonStyled onClick={handleDeleteClick} disabled={isDeleting}>
             
              Delete
            </ButtonStyled>
          </div>
        </>
      )}
    </li>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactItem;