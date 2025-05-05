import React from 'react';
import UserListItem from './UserListItem/UserListItem';
import styles from './UserList.module.css';

const UsersList = ({ users = [] }) => {
    const listItems = users.map(user => (
    <UserListItem key={user.id} user={user} />
    ));

    return <ul className={styles.list}>{listItems}</ul>;
};

export default UsersList;
