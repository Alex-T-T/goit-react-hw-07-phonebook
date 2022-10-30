import { Form } from './Form/Form';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
// import { ToastContainer } from 'react-toastify';


export const App = () => {

        return(
            <>
                <h1>Phonebook</h1>

                <Form />   
        
                <Filter />

                <ContactList />

                {/* <ToastContainer position="bottom-center"
                                autoClose={3000}
                                theme="dark"/> */}
        </>
    )
}

