//TopBar.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../ReduxStore/dataActions'; '../ReduxStore/dataActions'
import styled from 'styled-components';
import { ToggleSwitch } from './ToggleSwitch';
//Style for title
const Title = styled.h1`
    font-family: Arial, Helvetica, sans-serif;
    font-weight: lighter;
    color: ${(props) => props.theme.font_color};
    padding: 0;
    margin: 0;
`;
//style for the title wrapper
const TitleWrapper = styled.div`
    width:100%;
    height: 5vh;
    display: flex;
    border-bottom: 1px solid ${(props) => props.theme.border_color};
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    background-color: ${(props) => props.theme.body};
    padding: 0 20px; // Add some padding to the sides
`;

const RefreshButton = styled.img`
    width:3%;
    height:100%;
    cursor: pointer;
    &:active {
        transform: translateY(1px);
    }
    &:hover {
        border:1px solid ${(props) => props.theme.border_color};
    }
`;

export default function TopBar(props){
    const dispatch = useDispatch();

    const handleRefresh = () => {
        dispatch(fetchUsers());
    };

    return(
        <TitleWrapper>
            <ToggleSwitch changeTheme={props.changeTheme}/>
            <Title>
                Top Bar
            </Title>
            <RefreshButton  
                src={process.env.PUBLIC_URL + '/images/refreshIcon.png'}
                onClick={handleRefresh}/>
        </TitleWrapper>
    );
}