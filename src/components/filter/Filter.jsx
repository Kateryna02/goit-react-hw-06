
import React from 'react';
import s from './Filter.module.css';

const Filter = ({ value, onChange }) => {
    return (
        <div className={s.filter}>
            <label htmlFor="filter">Filter contacts by name:</label>
            <input
                type="text"
                id="filter"
                name="filter"
                value={value}
                onChange={onChange}
                placeholder="Enter name to filter"
            />
        </div>
    );
};

export default Filter;
