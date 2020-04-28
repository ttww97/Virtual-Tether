import { ICoordinate } from "../../interfaces/ICoordinate";

export const UPDATE_LOCATION = "UPDATE_LOCATION";

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

export type CommunicationAction =
  updateLocationAction