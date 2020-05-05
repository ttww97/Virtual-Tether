// The GPS interface will get three values
import { ILocation} from "./ILocation";
import {ITime} from "./ITime";
export interface IGPS {
  // The latitude of the user's current location
  latitude : number;
  // The longitdue of the user's current location
  longitude: number; 
  // The timestampe 
  timestampe: number;
}

export interface IGPSUpdate {
  location: ILocation;
  time: ITime;
}