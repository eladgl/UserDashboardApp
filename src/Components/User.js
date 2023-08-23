//User.js
import React from 'react';
import styled from 'styled-components';
//style for a container for one user
const UserCardContainer = styled.div`
    border-block: 1px solid ${(props) => props.theme.border_color};
    border-radius: 5px;
    width: 200px;
    padding:10px;
    margin: 10px;
    background-color: ${(props) => props.theme.surface_color};
    display: flex;
    align-items: center;
    overflow: hidden;
    cursor: pointer;
    &:hover {
        background-color: ${(props) => props.theme.user_card_hover_color};
    }
    &:active {
        transform: translateY(2px);
    }
`;
//style for a user's avatar
const UserAvatar = styled.div`
    margin-right: 10px;
    width: 50px; 
    height: 50px;
    border-radius: 50%; 
    overflow: hidden; /* Hide any overflow content outside the circle */
    border: 2px solid ${(props) => props.theme.avatar_border_color}; 
`;
//style for where the user's avatar iamge will load to
const AvatarImage = styled.img`
    width: 100%; 
    height: 100%; 
    object-fit: cover; /* Maintain aspect ratio and cover the container */
`;
//style for username's name, title font size h3
const UserName = styled.h3`
    flex: 1; /*Allow the name to grow within the available space*/
    overflow: hidden;
    color: ${(props) => props.theme.font_color};
    margin-left: auto;
    white-space: nowrap;
    margin: 0;
`;
//style for username name, allowed scroll to the right if needed
const UserNameContainer = styled.section`
    width: 100%; 
    overflow-x: auto; 
    display: flex; /* Allow scrolling only if needed */
`;

export default function User(props){
    const handleUserClick = () => {
        props.onClick(props);
    }

    return(
        <UserCardContainer onClick={handleUserClick}>
                <UserAvatar>
                    <AvatarImage src={props.avatar} />
                </UserAvatar>
                <UserNameContainer>
                    <UserName>
                        {props.name}
                    </UserName>  
                </UserNameContainer>
            </UserCardContainer>
    );
}