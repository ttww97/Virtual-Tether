import {UPDATE_TYPE, UPDATE_CONSTANT} from '../actions/eventActions'

const initialState = {
    type: '',
    constantValue: 0
};

const eventReducer = (state = initialState, action) => {
    switch(action.type){
        case UPDATE_TYPE:
            return {...state, eventType: action.payload.eventType};
        case UPDATE_CONSTANT:
            return {...state, constantValue: action.payload.constantValue};
        default:
            return state
    }
}

export default eventReducer;