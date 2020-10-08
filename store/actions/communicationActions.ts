export const UPDATE_CONSTANT = "UPDATE_CONSTANT";
export const ADD_ALERT = "ADD_ALERT";

export interface ConstantValueAction {
  constantValue: number;
}

export interface AddAlert {
  alert: object;
}

export const updateConstant = (dispatch, constantValue) => {
 dispatch({ 
    type: UPDATE_CONSTANT,
    payload: {
      constantValue
    }
  })
}

export const addAlert = (dispatch, alert) => {
  dispatch({ 
     type: ADD_ALERT,
     payload: {
       alert
     }
   })
 }

export type CommunicationAction =
  ConstantValueAction
  | AddAlert