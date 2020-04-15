import {combineReducers} from 'redux';
import communicationReducer from './communicationReducer';

const rootReducer = combineReducers({
    communication: communicationReducer
});

export default rootReducer;