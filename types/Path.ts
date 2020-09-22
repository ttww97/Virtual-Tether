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
    crossSections : Line[] = [];

    updateCrossSectons(){
        this.crossSections = [];
        for (let i = 0; i < this.leftSide.length; i++){
            this.crossSections.push({node1 : this.leftSide[i],
                                     node2 : this.rightSide[i]})
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
        this.node1 = n1;
        this.node2 = n2;
    }
    node1: PathNode;
    node2: PathNode;
}

