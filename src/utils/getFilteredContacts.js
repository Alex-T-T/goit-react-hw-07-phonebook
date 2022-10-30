export const getFilteredContacts = (filter, contacts) => { 
    // console.log("filter get =>", filter)
    if (!filter) {
        return contacts;
    }

    const normalizeContactName = filter.toLowerCase();

    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizeContactName));
};
