import { ICoordinate } from "../../interfaces/ICoordinate";
import {IAlgorithmUpdateData} from "../../interfaces/AlgorithmInterface"
import { Path } from "../../types/Path";


export const UPDATE_LOCATION = "UPDATE_LOCATION";
export const UPDATE_GPS_DATA = "UPDATE_GPS_DATA";
export const UPDATE_PATH = "UPDATE_PATH";

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

export const updatePath = (dispatch, path : Path) => {
  dispatch({
    type: UPDATE_PATH,
    payload: {
      path: path
    }
  })
}

export const updateGpsData = (dispatch, gpsFrame : IAlgorithmUpdateData) => {
  dispatch({ 
    type: UPDATE_GPS_DATA,
    payload: {
      location: gpsFrame.location,
      time: gpsFrame.time
    }
  })
}

export type CommunicationAction =
  updateLocationAction