import { EventType } from "expo/build/Updates/Updates";

export const UPDATE_CONSTANT = "UPDATE_CONSTANT";
export const UPDATE_TYPE = "UPDATE_TYPE"

export interface EventType {
    type: string;
}

export interface ConstantValueAction {
    constantValue: number;
}

export const updateType = (dispatch, eventType) => {
    dispatch({
        type: UPDATE_TYPE,
        payload: {
            eventType
        }
    })
}

export const updateConstant = (dispatch, constantValue) => {
    dispatch({ 
       type: UPDATE_CONSTANT,
       payload: {
         constantValue
       }
     })
}

export type EventActino = 
    EventType 
    | ConstantValueAction