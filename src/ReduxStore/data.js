//data.js
import * as actions from "./dataActionTypes";

//this is the reducer function for the store
//its name is data as requested

export default function data(state = {users:[], isLoading:true}, action) {
    switch (action.type){
        case actions.FETCH_USERS:{
            return {
                ...state,
                users: action.payload.users.user,
                isLoading:false
              };
        }
        case actions.USER_REMOVE:{
            return {
                ...state,
                users: state.users.filter(user => user.id !== action.payload.id) //take the id from the payload
            };
        }
        case actions.UPDATE_USER_INFO:{
            const userIndex = state.users.findIndex(user => user.id === action.payload.id);
            if (userIndex !== -1) {
                const updatedUsers = [...state.users];  
                updatedUsers[userIndex] = {
                    ...updatedUsers[userIndex],         //copy existing user data
                    name: action.payload.name,          //update name and email
                    email: action.payload.email,        
                };
                return {
                    ...state,
                    users: updatedUsers,
                };
            }
            return state; // If user not found, return unchanged state
        }
        default:{
            return state;
        }
    }
}