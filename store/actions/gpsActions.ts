import { ICoordinate } from "../../interfaces/ICoordinate";
import {IAlgorithmUpdateData} from "../../interfaces/AlgorithmInterface"


export const UPDATE_LOCATION = "UPDATE_LOCATION";
export const UPDATE_GPS_DATA = "UPDATE_GPS_DATA";

export interface updateLocationAction {
    currentLocation: number;
}

export const updateLocation = (dispatch, currentLocation : ICoordinate) => {
 dispatch({ 
    type: UPDATE_LOCATION,
    payload: {
        currentLocation
    }
  })
}

export const updateGpsData = (dispatch, newGps : IAlgorithmUpdateData) => {
  dispatch({ 
    type: UPDATE_GPS_DATA,
    payload: {
      path: newGps.path,
      location: newGps.location,
      time: newGps.time
    }
  })
}

export type CommunicationAction =
  updateLocationAction