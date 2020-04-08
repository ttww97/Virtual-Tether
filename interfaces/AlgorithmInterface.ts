import {ICoordinate, IPath} from "./Path";
export interface IAlgorithmUpdateData { 
    path: IPath;
    location: ICoordinate;
    time: number;
  }