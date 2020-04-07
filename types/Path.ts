import {Vec2d} from "./Vec2D"
export class Path {
    leftNodes : PathNode[];
    rightNodes : PathNode[];
}

class PathNode {
    location : Vec2d;
    margin : number; 
}