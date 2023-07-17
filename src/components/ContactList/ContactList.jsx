import { useSelector } from 'react-redux';
import ContactItem from '../ContactItem';
import { getFilteredContacts } from 'redux/selectors';
import { useFetchContactsQuery } from 'redux/contactsSlice';
import { getFilter } from 'redux/selectors';

const ContactList = () => {
  const filter = useSelector(getFilter);

  const { data: contacts, isLoading, error } = useFetchContactsQuery();
  return (
    <>
      {isLoading && <p>loading</p>}
      {error && (
        <p>
          Sorry, something wrong, please try again
        </p>
      )}
      {contacts && contacts.length === 0 && <p>There is no any contact</p>}
      <ul>
        {contacts &&
          getFilteredContacts(contacts, filter).map(({ id, name, number }) => (
            <ContactItem key={id} name={name} number={number} id={id} />
          ))}
      </ul>
    </>
  );
};

export default ContactList;