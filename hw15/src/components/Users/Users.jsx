import React, { useState, useCallback, useMemo } from 'react';
import UsersList from '../UserList/UserList';
import UserFilter from '../FilterUsers/FilterUsers';
import userList from '../../data/userList';
import styles from './Users.module.css';

const UserDirectory = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = text => {
    setSearchTerm(text);
    };

    const getFilteredUsers = useCallback((term, list) => {
    return list.filter(user =>
        user.name.toLowerCase().includes(term.toLowerCase())
    );
    }, []);

    const displayedUsers = useMemo(
    () => getFilteredUsers(searchTerm, userList),
    [searchTerm, getFilteredUsers]
    );

    return (
    <div className="wrapper">
        <div className={styles.container}>
        <h2 className={styles.heading}>User List</h2>
        <UserFilter onFilterChange={handleSearch} />
        <UsersList users={displayedUsers} />
        </div>
    </div>
    );
};

export default UserDirectory;
