import React, { useEffect, useState } from 'react';
import css from '../Form/Form.module.css';
import { useAddContactMutation, useGetContactsQuery } from 'redux/contactsSlice';
import { auditName } from 'utils/auditName';
import { auditNumber } from 'utils/auditNumber';
import { toast } from 'react-toastify';


export const Form = () => {
    const [name, setname] = useState('');
    const [number, setNumber] = useState('');

    const { data } = useGetContactsQuery();
    const [addNewContact, result] = useAddContactMutation();
    // console.log("addNewContact =>", addNewContact)

    useEffect(() => {
        result.isError && toast.error("error on add Contact")
    }, [result.isError]); 

    useEffect(() => {
        result.isSuccess && toast.success("Contact successfully added")
    }, [result.isSuccess]);


    const handleInputChange = (event) => {
        const { name, value } = event.currentTarget
        
        // console.log('event.currentTarget.name =>', event.currentTarget.name )
        switch (name) {
            case 'name':
                setname(value);
                break;
            
            case 'number':
                setNumber(value);
                break;
            
            default:
                return;
        }
    }

    // const createContact = async ({ name, number }) => {
    //     try {
    //         await addNewContact({ name, number });
    //         toast.success ("Contact successfully added")
    //     } catch (error) {
    //         toast.error(error.message)
    //     }
    // };




    function handleInputSubmit  (event) {
        event.preventDefault();
        
        if (auditName(data, name)) {
            toast.error (`${name} is already in contacts.`);
            return 
        };

        if (auditNumber(data, number)) {
            toast.error (`${number} is already in contacts.`);
            return 
        };

        // createContact({ name, number });
        addNewContact({ name, number });

        reset();
    }

    const reset = () => {
        setname('');
        setNumber('');
    }

    return (
        <>
            <form className={css.form} onSubmit={handleInputSubmit}>
            <label> Name
                    <input
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            required
                            value={name}
                            onChange={handleInputChange}
                    />
            </label>

            <label> Number
                    <input
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                            required
                            value={number}
                            onChange={handleInputChange}
                    />
            </label>    

                <button className={css.addBtn } type='submit'> Add contact</button>
            </form>

        </>
    )
}
