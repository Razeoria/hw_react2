import React from 'react';
import styles from './UserListItem.module.css';

const UserListItem = ({ user }) => {
    return (
    <li className={styles.listItem}>
        {user.name}
    </li>
    );
};

export default UserListItem;
