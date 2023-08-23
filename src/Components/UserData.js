/* eslint-disable react/jsx-pascal-case */
//UserData.js
import React, {useState, useEffect} from "react";
import styled from 'styled-components';
import { capitalizeFirstLetter } from "../Helpers/helper";
//style for form, each user that get clicked, loads their info
//into a form where they can update if wanted, their info
const Form = styled.section`
    border: 1px solid black;
    padding: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color:${(props) => props.theme.surface_color};
    overflow:hidden;
`;
//style for input
const Input = styled.input`
    background-color: white;
    border: none;
    border-bottom: 5px solid ${(props) => props.theme.input_border_color};
    padding: 10px;
    margin: 5px;
    &:focus {
        outline: none; /*remove default focus that is done*/
        border-bottom:5px solid green;
    }
`;
//style for update info button
const Button = styled.button`
    background-color: ${(props) => props.theme.button_color};
    color: ${(props) => props.theme.button_font_color};
    padding: 10px 20px;
    border: none;
    margin: 5px;
    cursor: pointer;
    &:hover {
        color: ${(props) => props.theme.button_font_color_hover};
    }
    &:active {
        transform: translateY(1px);
    }
`;
//style for labels indicating what input we look at
const Label = styled.p`
    color: ${(props) => props.theme.label_font_color};
    font-size: 1.5em;
    &:hover {
        color:  ${(props) => props.theme.label_font_color_hover};
    }
`;
//style for aligning components on same row
const HorizontalWrapper = styled.div`
    display:flex;
    flex-direction:row;
    align-items: center;
`;
//style for aligning components on same column
const VerticalWrapper = styled.div`
    display:flex;
    flex-direction:column;
    align-items: center;
`;
//style for user avater container
const UserAvatar = styled.div`
    margin-right: 10px;
    width: 80px; 
    height: 80px;
    border-radius: 50%; 
    overflow: hidden; /* Hide any overflow content outside the circle */
    border: 2px solid ${(props) => props.theme.border_color}; 
`;
//style for user image where it loads to
const AvatarImage = styled.img`
    width: 100%; 
    height: 100%; 
    object-fit: cover; /* Maintain aspect ratio and cover the container */
`;

export default function UserData(props) {
    const {selectedUser} = props;

    const [name, setName] = useState(selectedUser.name);
    const [email, setEmail] = useState(selectedUser.email);

     // Update state when selectedUser prop changes
    useEffect(() => {
        setName(selectedUser.name);
        setEmail(selectedUser.email);
    }, [selectedUser]);
    
    //change name
    const handleNameChange =(e) => {
        setName(e.target.value);
    };
    //handle email change
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    //pass the new updated data of the selectedUser to the db
    //send id too so we can find it in the UserList
    const handleUpdateInfo = (e) => {
        props.updateInfo({"name":name, "email":email, "id":selectedUser.id});
    }

    return(
        <Form>
            <VerticalWrapper>
                <HorizontalWrapper>
                    <UserAvatar>
                        <AvatarImage src={selectedUser.avatar} />
                    </UserAvatar>
                    <Label>
                        {"Ownership: " + capitalizeFirstLetter(selectedUser.ownership)}
                    </Label>
                </HorizontalWrapper>
                <HorizontalWrapper>
                    <Label>Name: </Label>
                    <Input 
                        id="name"
                        type="text" 
                        value={name}
                        onChange={handleNameChange} />
                </HorizontalWrapper>
                <HorizontalWrapper>
                    <Label>E-mail:</Label>
                    <Input
                        id="email" 
                        type="text" 
                        value={email}
                        onChange={handleEmailChange}/>
                </HorizontalWrapper>
                <Button onClick={handleUpdateInfo}>
                    Update info
                </Button>
            </VerticalWrapper>
        </Form>
    );
};