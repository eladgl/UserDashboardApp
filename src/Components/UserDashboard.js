//UserDashboard.js
import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actionCreator from '../ReduxStore/dataActions'
import UserList from './UserList';
import UserPage from './UserPage';
import styled from 'styled-components';
//style for section where all users' cards are loading to
const ScrollPane = styled.section`
    max-height: 103vh;
    width: 350px;
    overflow-y: auto;
    border: 2px solid  ${(props) => props.theme.border_color};
    background-color: ${(props) => props.theme.body};
    flex-direction: column;
    display:flex;
    align-items: center;
`;
//style for wrapping the scrollpane and UserPage component
const HorizontalWrapper = styled.div`
  display: flex;
  flex-direction:row;
`;

export default function UserDashboard(){
    //get the users and dispatch
    const dispatch = useDispatch();

    const [selectedUser, setSelectedUser] = useState(null);

    const users = useSelector(state => {
        console.log("UserDashboard state print");
        console.log(state);
        return state.users;
    });
    

    useEffect(() => {
        dispatch(actionCreator.fetchUsers());
        // Reset the selected user whenever users data changes
        setSelectedUser(null);
    }, [dispatch]); //when ever dispatch function changes activate hook
    
    //handle add user to show it on the user page screen
    const handleAddUserClick = (user) => {
        setSelectedUser(user);
    };
    //handle delete user method
    const handleDeleteUser = (deleteUser) => (
        dispatch(actionCreator.userRemove(deleteUser))          // Dispatch the action to remove the user
    );
    //update the user info and update in schema in db
    const handleUserInfoUpdate = (updatedUser) => (
            dispatch(actionCreator.userInfoUpdate(updatedUser)) // Dispatch the action to remove the user
    );

    return(
        <HorizontalWrapper>
            <ScrollPane>
                <UserList 
                    //Send only the user data since it needs an array
                    users={users} 
                    onUserClick={handleAddUserClick} />
            </ScrollPane>
            <UserPage 
                selectedUser={selectedUser}
                updateUserInfo={handleUserInfoUpdate}
                deleteUser={handleDeleteUser}
                />
        </HorizontalWrapper>
    );
};