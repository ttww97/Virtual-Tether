import {combineReducers} from 'redux';
import communicationReducer from './communicationReducer';
import gpsReducer from './gpsReducers';

const rootReducer = combineReducers({
    communication: communicationReducer,
    gps: gpsReducer
});

export default rootReducer;