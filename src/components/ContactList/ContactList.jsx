import React from "react";
import css from '../ContactList/ContactList.module.css';
import { ContactItem } from "components/ContactItem/ContactItem";
import { useSelector } from "react-redux";
import { getFilter } from "redux/selectors";
import { getFilteredContacts } from "utils/getFilteredContacts";
import { useGetContactsQuery } from "redux/contactsSlice";

export const ContactList = () => {
    const { data: contacts, error, isLoading } = useGetContactsQuery();
    const filter = useSelector(getFilter)
    
    const getFilteredContactList = getFilteredContacts(filter, contacts)

    
    return <ul className={css.contactList}>
        {!isLoading && getFilteredContactList?.map(contact => <ContactItem
            key={contact.id}
            id={contact.id}
            name={contact.name}
            number={contact.number} />
        )}
        {error && <p>Somethithg is wrong... Try later</p>}
    </ul>
};

