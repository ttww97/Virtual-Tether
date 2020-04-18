import {Vec2d} from "./Vec2D"
import {IPath, INode} from "../interfaces/Path"
export class Path implements IPath {
    name : string;
    leftSide: PathNode[];
    rightSide : PathNode[];
}

export class PathNode implements INode {
    errorMargin : number;
    coordinate : Vec2d; 
}
