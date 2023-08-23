//store.js
import { createStore, applyMiddleware  } from "redux";
import data from './data';
import thunk from 'redux-thunk';

const store = createStore(data, applyMiddleware(thunk));

export default store;