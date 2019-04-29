import { combineReducers } from 'redux';
import { initAppReducer } from './reducer/initAppReducer';
import { inviteReducer } from './reducer/inviteReducer';

export default combineReducers({
    initAppReducer:initAppReducer,
    inviteReducer:inviteReducer
})