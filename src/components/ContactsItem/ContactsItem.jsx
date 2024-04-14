
import React from 'react';
import s from "./contactsItem.module.css";

const ContactItem = ({ contact, onDeleteContact }) => {
    const { id, name, number } = contact;

    const handleDelete = () => {
        onDeleteContact(id);
    };

    return (
        <li className={s.contactItem}>
            <p className={s.contactP}>{name}: {number}</p>
            <button className={s.buttonItem} type="button" onClick={handleDelete}>Delete</button>
        </li>
    );
};

export default ContactItem;


