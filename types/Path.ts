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
    getCross(i: number) : Line{
        if (this.leftSide.length < i -1) {
            try {
                throw new Error("out of bounds");
                
            } catch (error) {
                console.log(error);
            }          
        } else {
            return new Line(this.leftSide[i], this.rightSide[i]);
        }
    }
}



export class PathNode implements INode {
    constructor(){
        this.errorMargin= 0;
        this.coordinate = new Vec2d(0,0);
        }
    errorMargin : number;
    coordinate : Vec2d; 
}
export class Line {
    constructor(n1: PathNode, n2: PathNode){
        this.nodes[0] = n1;
        this.nodes[1] = n2;
    }
    nodes : PathNode[];
}

