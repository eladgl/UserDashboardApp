//UserList.js
import React from 'react';
import User from './User';

export default function UserList(props) {
    //when clicking on a user
    const handleAddUserClick = (userData) => {
        props.onUserClick(userData);
    };

    const renderUsers = props.users.map((user) => (
        <User 
            key = {user.id}
            id = {user.id}
            name = {user.name}
            email = {user.email}
            avatar = {user.avatar}
            ownership = {user.ownership}
            onClick = {() => handleAddUserClick(user)}
        />
    ));
    
    return (
        <div> 
            {renderUsers} {/* I have put it inside div since it might be at first null, so jxs
                            will return something and no error will be thrown*/}
        </div>
        );
};