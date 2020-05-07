import {UPDATE_LOCATION, UPDATE_GPS_DATA, UPDATE_PATH} from "../actions/gpsActions"; 

const initialState = {
    currentLocation: {x:0, y:0},
    data: {
        time: 0,
        location: {x:0, y:0}
    },
    path: {},
    
};

const gpsReducer = (state = initialState, action) => {
    switch(action.type){
        case UPDATE_LOCATION:
            return {...state, currentLocation: action.payload.currentLocation}
        case UPDATE_GPS_DATA:
                return {...state, data: {location: action.payload.location, time:action.payload.time}}
        case UPDATE_PATH:
                return {...state, path: action.payload.path}
        default:
            return state
    }
}
export default gpsReducer;
