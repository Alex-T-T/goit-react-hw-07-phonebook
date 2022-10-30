import { Form } from './Form/Form';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const App = () => {

        return(
            <>
                <h1>Phonebook</h1>

                <Form />   
        
                <Filter />

                <ContactList />

                <ToastContainer position="top-right"
                                autoClose={3000}
                                theme="dark"/>
        </>
    )
}

