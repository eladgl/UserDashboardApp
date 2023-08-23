//index file that loads the main app, loading in strict mode so i
//can get compile errors at compile time

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './ReduxStore/store';
import { Provider } from 'react-redux';
import { fetchUsers } from './ReduxStore/dataActions';
import { LoadingSpinner } from './Components/LoadingSpinner';

const fs = require('fs');

store.subscribe(() => {
    const currentUsersState = store.getState();
    console.log("Store state after dispatching action");
    console.log(currentUsersState);
    //check if state is not empty before saving
    if(Object.keys(currentUsersState).length > 0){
      console.log("store before write");
      fetch('http://localhost:3001/saveState', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(currentUsersState, null, 2),
      })
        .then(response => response.json())
        .then(data => {
          console.log('State saved successfully:', data.message);
        })
        .catch(error => {
          console.error('Error saving state:', error);
        });
    }
});

//fetch users
store.dispatch(fetchUsers()).then(() => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        {console.log(store.getState().isLoading)}
        {store.getState().isLoading ? 
        (
          
          <LoadingSpinner />
        ) : 
        (
          <App />
        )}
      </Provider>
    </React.StrictMode>
  );
}).catch(error => {
  // Handle error if the promise is rejected
  console.error('An error occurred:', error);
});


// root.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>
// );