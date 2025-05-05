import React from 'react';
import styles from './FilterUsers.module.css';

const UserFilter = ({ onFilterChange }) => {
    const handleInput = e => {
    onFilterChange(e.target.value);
    console.log('Filter text:', e.target.value);
    };

    return (
    <div className={styles.filterWrapper}>
        <input
        type="text"
        className={styles.searchInput}
        placeholder="Search users..."
        onChange={handleInput}
        />
    </div>
    );
};

export default UserFilter;
