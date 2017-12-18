import {createStore} from 'redux';
import itemReducer from './reducers/itemReducer.js';
import {combineReducers} from 'redux';

let reducers = combineReducers({
	itemList: itemReducer
});

const store = createStore(reducers);

export default store;
