// The interface of a path
import {ICoordinate} from "./ICoordinate";

export interface IPath {
    name: string;

    //Left and right side instead of inside and outside
    //This is because not all paths will be loops
    leftSide: INode[];
    rightSide: INode[];
}

// These are the points along the path, the error margin is used to calculate
// which type of alert to send and coourdinate is a coordinate object
export interface INode {
    errorMargin : number;
    coordinate : ICoordinate;
}

// The coordinate is cartesian for simplicity, but we will need to translate from GPS
// To cartesian.
