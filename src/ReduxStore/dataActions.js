// dataActions.js
import * as actions from './dataActionTypes'; // Import action types

//action creator for fetching users
export const fetchUsers = () => {
    return dispatch => {
      return new Promise((resolve, reject) => {
      fetch('http://localhost:3001/mySchemaData')
        .then(response => response.json())
        .then(data => {
          dispatch({ type: actions.FETCH_USERS, payload: data});
          resolve();
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
      });
    };
  };

//action creator for removing user from store
export const userRemove = (user) => {
    return {
        type: actions.USER_REMOVE,
        payload: user // Pass the user data to the reducer for removal
    };
};

//action creator for updating user information - name and email can be updated
export const userInfoUpdate = (user) => {
    return {
        type: actions.UPDATE_USER_INFO,
        payload: user
    };
};