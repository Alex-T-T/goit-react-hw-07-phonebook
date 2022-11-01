import css from '../ContactItem/ContactItem.module.css';
import React from 'react';
import PropTypes from 'prop-types'
import { useRemoveContactMutation } from 'redux/contactsSlice';
import { toast } from 'react-toastify';
import { useEffect } from 'react';


export const ContactItem = ({id, name, number}) => {
    const [removeContact, result] = useRemoveContactMutation();
    // console.log("result DELETE => ", result)

    useEffect(() => {
        result.isError && toast.error("error on remove Contact")
    }, [result.isError]); 

    useEffect(() => {
        result.isSuccess && toast.success("Contact successfully removed")
    }, [result.isSuccess]);

    return (
        <>
            <li key={id} className={css.contactListItem}>
                                <p>Name: {name}</p>
                                <p>Number: {number}</p>
                <button className={css.contactRemoveBtn}
                    onClick={() => removeContact(id)}
                    type="button"
                    disabled={result.isLoading}> Remove </button>
            </li>
        </>
    )
}

ContactItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
}