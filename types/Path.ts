import Vec2d from "./Vec2d"
import {IPath, INode} from "../interfaces/Path"
export class Path implements IPath {
    constructor(leftSide?: PathNode[], rightSide?: PathNode[]){
        this.leftSide = leftSide || [];
        this.rightSide = rightSide || [];
    }
    sections: PathSection[];
    finerSections: PathSection[];
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

    
    createSections() {
        this.sections = [];
        for (let i = 0; i < this.leftSide.length-1; i++){
            let tempsection: PathSection;
            tempsection.left1= this.leftSide[i]
            tempsection.left2= this.leftSide[i+1]
            tempsection.right1= this.rightSide[i]
            tempsection.right2 = this.rightSide[i + 1]   
            this.sections.push(tempsection)
        }
     }

     increaseGranularity(lengthOfSection: number){
         // lengthOfSection denotes the desired spacing between path nodes
         // this functions return a finer path data with fake evenly spaced 
         // subnodes between original adjacent nodes satisfying the 
         // lengthOfSection contraint
        if (this.sections == null){
            this.createSections;
        }
        this.finerSections = [];
        let finerPathNodeList : PathNode[][] = [[],[]]; //to save all left nodes and right nodes

        for (let i = 0; i < PathSection.length - 1; i ++){
            let pathSect : PathSection = this.sections[i];
            // here assuming the left vector is parallel to the right vector and has the same length
            let leftSectVec : Vec2d = pathSect.left1.coordinate.subtract(pathSect.left2.coordinate);
            let length : number = leftSectVec.norm();
            let divisionFactor : number = Math.ceil(length / lengthOfSection);
            let finerPathNodeSubList : PathNode[][] = pathSect.evenSpacing(divisionFactor);

            if (i == PathSection.length - 2){
                // add the last path node pair to finerPathNode as it's neglected by evenSpacing
                finerPathNodeSubList[0].push(this.sections[i].left2);
                finerPathNodeSubList[1].push(this.sections[i].right2);
            }

            finerPathNodeList[0].concat(finerPathNodeSubList[0]);
            finerPathNodeList[1].concat(finerPathNodeSubList[1]);
        }
        
        let FinerPath = new Path(finerPathNodeList[0], finerPathNodeList[1])
        FinerPath.createSections;
        this.finerSections = FinerPath.sections;

     }

     addNode(rightNode: PathNode, leftNode: PathNode){
         // add new map data to the exisiting path
         if (this.sections == null && this.rightSide == null && this.leftSide == null){
             this.sections = [];
             //TO DO when a new path needs to be created
         }
         else{
            // To do when need to add new node pairs to existing path
            // iterate all line segments formed by adjacent nodes as Vec2d
            // use cross product of (b-a) and (c-a) equaling 0 to determine
            // whether a point a is in the line segment bc 
         }
     }

     
}



export class PathNode implements INode {
    constructor(errorMargin?: number, coordinate?: Vec2d){
        this.errorMargin= errorMargin || 0;
        this.coordinate = coordinate || new Vec2d(0,0);
        // new stuff
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

// A section of the path is defined by the area contained by 4 nodes. 
// Left[n], left[n+1], right[n], right[n+1] 
export class PathSection {
    constructor(left1:PathNode, left2:PathNode, right1:PathNode, right2: PathNode) {
        this.left1 = left1;
        this.left2 = left2;
        this.right1 = right1;
        this.right2 = right2;
    }

    left1: PathNode;
    left2: PathNode;
    right1: PathNode;
    right2: PathNode;

    isInside(coord: Vec2d) {
        //(this.left1.coordinate.x + this.left2.coordinate.x) / 2 + this.right1.coordinate.x + this.right2.coordinate.x);
        // x=[2,3,7]
        // y=[4,-6,8]
        // def get_area(x,y):
        //     area=0.5*( (x[0]*(y[1]-y[2])) + (x[1]*(y[2]-y[0])) + (x[2]*(y[0]-y[1])) )
        //     return int(area)
        // coords=list(zip(x,y))
        // print("Area of points {},{},{} is {}".format(*coords,get_area(x,y)))
        // TODO
        // whole  rec
        // left 1 left2 right 1 
        // right 1 right 2 left 2 
        // 
        // coord right 1 right 2
        // coord left 1 left 2
        // coord left 1 right 1
        // coord left 2 right 2
        var area_rec1 = 0;
        var area_rec2 = 0;
        var area_rec = 0;
        var area_tran1 = 0;
        var area_tran2 = 0;
        var area_tran3 = 0;
        var area_tran4 = 0;
        var area_tran = 0;
        // left 1 left2 right 1 
        var x = [this.left1.coordinate.x, this.left2.coordinate.x,this.right1.coordinate.x];
        var y = [this.left1.coordinate.y, this.left2.coordinate.y, this.right1.coordinate.y];
        area_rec1 = this.getArea(x, y);
        // right 1 right 2 left 2 
        var x = [this.right1.coordinate.x, this.right2.coordinate.x,this.left2.coordinate.x];
        var y = [this.right1.coordinate.y, this.right2.coordinate.y, this.left2.coordinate.y];
        area_rec2 = this.getArea(x, y);

        area_rec = area_rec1 + area_rec2;
        //coord right 1 right 2
        var x = [coord.x, this.right1.coordinate.x,this.right2.coordinate.x];
        var y = [coord.y, this.right1.coordinate.y, this.right2.coordinate.y];
        area_tran1 = this.getArea(x, y);

        // coord left 1 left 2
        var x = [coord.x, this.left1.coordinate.x,this.left2.coordinate.x];
        var y = [coord.y, this.left1.coordinate.y, this.left2.coordinate.y];
        area_tran2 = this.getArea(x, y);

        // coord left 1 right 1
        var x = [coord.x, this.left1.coordinate.x,this.right1.coordinate.x];
        var y = [coord.y, this.left1.coordinate.y, this.right1.coordinate.y];
        area_tran3 = this.getArea(x, y);

        // coord left 2 right 2
        var x = [coord.x, this.left2.coordinate.x,this.right2.coordinate.x];
        var y = [coord.y, this.left2.coordinate.y, this.right2.coordinate.y];
        area_tran4 = this.getArea(x, y);
        
        area_tran = area_tran1 + area_tran2 + area_tran3 + area_tran4;

        return area_rec == area_tran;
    }

    getArea(x,y) { 
        return 0.5*( (x[0]*(y[1]-y[2])) + (x[1]*(y[2]-y[0])) + (x[2]*(y[0]-y[1])))
    }

    evenSpacing(divisionFactor: number){
        // evenly divide a path section to the divisionFactor amount and return a PathNode[] of 
        // left nodes and right nodes containing the first node pair (right1 and left1) and all
        // newly formed (faked) path nodes
        // error margin inherited from the first PathNode
        // noting here the left2 and right 2 are neglected to avoid duplication
        if (divisionFactor == 1){
            return [[this.left1,this.left2],[this.right1,this.right2]];
        }
        let finerPathNode_left : PathNode[] = [this.left1];
        let finerPathNode_right = [this.right1]

        let incrementalVec2D_left : Vec2d = this.left2.coordinate.subtract(this.left1.coordinate)
            .scalarMult(1/divisionFactor)
        let incrementalVec2D_right = this.right2.coordinate.subtract(this.right1.coordinate)
            .scalarMult(1/divisionFactor)

        for (let i = 1; i < divisionFactor; i ++){
            let newLeft = new PathNode(this.left1.errorMargin, 
                this.left1.coordinate.add(incrementalVec2D_left.scalarMult(i)));
            finerPathNode_left.push(newLeft);

            let newRight = new PathNode(this.right1.errorMargin, 
                this.right1.coordinate.add(incrementalVec2D_right.scalarMult(i)));
            finerPathNode_right.push(newRight)
        }
        return [finerPathNode_left,finerPathNode_right];
    }
    
}
