import {UPDATE_LOCATION} from "../actions/gpsActions"; 

const initialState = {
    currentLocation: {x:0, y:0}
};

const gpsReducer = (state = initialState, action) => {
    switch(action.type){
        case UPDATE_LOCATION:
            return {...state, currentLocation: action.payload.currentLocation}
        default:
            return state
    }
}
export default gpsReducer;
