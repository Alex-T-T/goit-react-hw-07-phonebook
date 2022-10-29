const BASE_URL = 'https://635d1e0fcb6cf98e56ad41b8.mockapi.io/api/v1/';

export const getAllContacts = async () => {
    const contacts = await fetch(`${BASE_URL}contacts`)
        if (contacts.ok) {
            return contacts.json();
            }
            return Promise.reject(new Error(`We have a problem`))    
}
