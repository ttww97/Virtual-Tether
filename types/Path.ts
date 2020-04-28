import Vec2d from "./Vec2d"
import {IPath, INode} from "../interfaces/Path"
export class Path implements IPath {
    constructor(){
        this.leftSide = [];
        this.rightSide = [];
    }
    name : string = "";
    leftSide: PathNode[] = [];
    rightSide : PathNode[] = [];
    
}

export class PathNode implements INode {
    constructor(){
        this.errorMargin= 0;
        this.coordinate = new Vec2d(0,0);
        
        }

    
    errorMargin : number;
    coordinate : Vec2d; 
}
