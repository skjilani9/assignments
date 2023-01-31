import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { Productred,ProductDetred } from './reducers/Productred';
import {Userreduce} from './reducers/Userreduce'


const reducer = combineReducers({
    products:Productred,
    product:ProductDetred,
    user:Userreduce,
});

let initialState = {};

const middleware = [thunk];

const store =createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;