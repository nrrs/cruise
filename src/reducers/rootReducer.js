import { combineReducers } from 'redux';

import postReducer from './postReducer';

const RootReducer = combineReducers({
    posts: postReducer
});

export default RootReducer;