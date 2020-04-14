import {UPDATE_CONSTANT, ADD_ALERT} from "../actions/communicationActions"; 

const initialState = {
    constantValue: 0,
    alerts: []
};

const commuincationReducer = (state = initialState, action) => {
    switch(action.type){
        case UPDATE_CONSTANT:
            return {...state, constantValue: action.payload.constantValue}
        case ADD_ALERT:
            return {...state, alerts: state.alerts.concat([action.payload.alert])}
        default:
            return state
    }
}
export default commuincationReducer;
