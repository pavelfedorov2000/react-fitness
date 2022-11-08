import filters from './filters';
import products from './products';
import { combineReducers } from 'redux';


const rootReducer = combineReducers({
    filters,
    products,
});

export default rootReducer;