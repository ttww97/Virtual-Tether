import Vec2d from "./Vec2d"
import {IPath, INode} from "../interfaces/Path"
export class Path implements IPath {
    constructor(){
        this.leftSide = [];
        this.rightSide = [];
    }
    sections: PathSection[];
    name : string = "";
    leftSide: PathNode[] = [];
    rightSide : PathNode[] = [];
    
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
}

export class PathNode implements INode {
    constructor(){
        this.errorMargin= 0;
        this.coordinate = new Vec2d(0,0);
        // new stuff
    }
    


    
    errorMargin : number;
    coordinate : Vec2d; 
}
// A section of the path is defined by the area contained by 4 nodes. 
// Left[n], left[n+1], right[n], right[n+1] 
export class PathSection {
    constructor() {

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
}