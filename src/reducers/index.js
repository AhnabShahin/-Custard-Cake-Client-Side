import changeTheUserState from './setUserReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    changeTheUserState,
})
export default rootReducer;