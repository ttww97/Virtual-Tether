import {UPDATE_LOCATION, UPDATE_GPS_DATA} from "../actions/gpsActions"; 

const initialState = {
    currentLocation: {x:0, y:0},
    data: {
        time: 0,
        path: {},
        location: {x:0, y:0}
    }
    
};

const gpsReducer = (state = initialState, action) => {
    switch(action.type){
        case UPDATE_LOCATION:
            return {...state, currentLocation: action.payload.currentLocation}
        case UPDATE_GPS_DATA:
                return {...state, data: {location: action.payload.location, path: action.payload.path, time:action.payload.time}}
        default:
            return state
    }
}
export default gpsReducer;
