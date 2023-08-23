//UserPage.js
import React, {useState, useEffect} from 'react';
import UserData from "./UserData"; 
import ContributesList from './ContributesList';
import styled from 'styled-components';

//style for displaying a message when no user is selected
const NoSelectedMessage = styled.h4`
    color:red;
`;
//style for a message box
const MessageBox = styled.div`
    border:1px solid red;
    font-size:1.5em;
    background-color:white;
    text-align: center;
    width:30%;
    height:30vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
//style for the main wrapper of the UserPage
const Wrapper = styled.section`
    display: flex;
    width:100%;
    height:100vh;
    margin:10px;
    padding:10px;
    background-color:${(props) => props.theme.body};
    display: flex;
    justify-content: center;
    align-items: center;
`;
//style for the delete button
const DeleteButton = styled.button`
    background-color:${(props) => props.theme.delete_button};
    color:${(props) => props.theme.delete_button_font_color};
    font-size:1.2em;
    cursor: pointer;
    &:active {
        transform: translateY(1px);
    }
`;
//style for a vertical wrapper within the main wrapper
const VerticalWrapper = styled.div`
    dispaly:flex;
    align-items: center;
    justify-content: center;
    flex-direction:column;
    width:35%;
`;

export default function UserPage(props){
    //if selectedUser is null, init the contiructions list with null
    const contributionList = props.selectedUser ? props.selectedUser.contribute : null;

    const [selectedUser, setSelectedUser] = useState(null);
    //every time a selected user was changed, the props change so set
    //its props to selectedUser above
    useEffect(() => {
        setSelectedUser(props.selectedUser);
    }, [props.selectedUser]);

    //Back propgate to parent component UserDashboard
    const handleUpdateInfo = (updatedUser) => {
        props.updateUserInfo(updatedUser);
    };
    //handle delete user, remove by user unique id then reset the view
    const handleDeleteUser = () => {
        props.deleteUser({id : selectedUser.id});
        //after deleting a user return user page to 
        //initialized view
        setSelectedUser(null);
    }
    //if no user selected render and show only no user selected box
    if(!selectedUser){
        return (
            <Wrapper>
                <MessageBox>
                    <NoSelectedMessage>No user selected</NoSelectedMessage>
                </MessageBox>
            </Wrapper>
        );
    }
    //if everything is fine, load this DOM with the contributes
    return(
        <Wrapper>
            <VerticalWrapper>
                <UserData 
                    selectedUser = {selectedUser}
                    updateInfo = {handleUpdateInfo}/>
                <DeleteButton onClick={handleDeleteUser}>
                    Delete User
                </DeleteButton>
            </VerticalWrapper>
                <ContributesList 
                    contirubutionList = {contributionList}/>
        </Wrapper>
    );
}