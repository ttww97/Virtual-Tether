import {IPath} from "./Path";
import {ICoordinate} from "./ICoordinate";
import {ITime} from "./ITime";


export interface IAlgorithmUpdateData { 
    path: IPath;
    location: ICoordinate;
    time: ITime;
}