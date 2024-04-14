



import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';

import ContactsForm from '../form/ContactsForm.jsx';
import ContactList from '../contactsList/ContactsList.jsx';
import Filter from '../filter/Filter.jsx';
import s from './ContactsApp.module.css';
import { addContact, deleteContact, selectContacts } from '../../redux/contactsSlice';
import { handleChangeFilter, selectNameFilter } from '../../redux/filtersSlice';

const App = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);
    const filter = useSelector(selectNameFilter);

    useEffect(() => {
        const savedContacts = localStorage.getItem('contacts');
        if (savedContacts) {
            JSON.parse(savedContacts).forEach(contact => {
                dispatch(addContact(contact));
            });
        }
    }, [dispatch]);

    useEffect(() => {
        localStorage.setItem('contacts', JSON.stringify(contacts));
    }, [contacts]);

    const handleAddContact = newContact => {
        const isContactExists = contacts.some(
            contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
        );

        if (isContactExists) {
            alert(`${newContact.name} is already in contacts.`);
            return;
        }

        dispatch(addContact({ id: nanoid(), ...newContact }));
    };

    const handleDeleteContact = contactId => {
        dispatch(deleteContact(contactId));
    };

    const handleFilterChange = e => {
        dispatch(handleChangeFilter(e.target.value));
    };

    const filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <div className={s.start}>
            <h1>Phonebook</h1>
            <ContactsForm onAddContact={handleAddContact} contacts={contacts} />
            <h2>Contacts</h2>
            <Filter value={filter} onChange={handleFilterChange} />
            <ContactList contacts={filteredContacts} onDeleteContact={handleDeleteContact} />
        </div>
    );
};

export default App;




