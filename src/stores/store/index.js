import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import user from '../reducers/user';


const store = createStore(user,[],applyMiddleware(thunk));

export default store;
