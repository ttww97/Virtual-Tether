import { Path,PathNode } from "../types/Path";
import { placeholderv3d } from "../types/placeholderv3d";
import { get_cartesian_dd } from "../util/cartesian";
import  Vec2d  from "../types/Vec2D";


export function buildPath(name: string,
                     innerlat : number[], innerlong: number[],
                     outerlat : number[], outerlong: number[],
                     errorMargin: number)
                    : Path {
    let p1 : Path = new Path();
    p1.name = name;
    //builds a path with outer coord stord in the rightside, and inner nodes stored in the left side.

    try {
        if (innerlat.length != innerlong.length){
            throw "invalid path"
        }
            else{
            for (let i = 0; i < innerlat.length; i++){
                let vec3 : placeholderv3d;
                vec3 = get_cartesian_dd(innerlat[i], innerlong[i]);
                let pathNode : PathNode = new PathNode();
                pathNode.coordinate.x = vec3.x;
                pathNode.coordinate.y = vec3.y;
                pathNode.errorMargin = errorMargin;
                p1.leftSide.push(pathNode);
            }        
        }

    
        if (outerlat.length != outerlong.length){
            throw "invalid path"
        }
        else{
            for (let i = 0; i < outerlat.length; i++){
                let vec3 : placeholderv3d;
                vec3 = get_cartesian_dd(outerlat[i], outerlong[i]);
                let pathNode : PathNode = new PathNode();
                pathNode.coordinate.x = vec3.x;
                pathNode.coordinate.y = vec3.y;
                pathNode.errorMargin = errorMargin;
                p1.rightSide.push(pathNode);
            }        
        }
        
    } catch (error) {
        console.log(error)
    }
    p1.createSections()
    return p1;
}

export function buildPathCart(name: string,
                     innerlat : number[], innerlong: number[],
                     outerlat : number[], outerlong: number[],
                     errorMargin: number)
                    : Path {
    let p1 : Path = new Path();
    p1.name = name;
    //builds a path with outer coord stord in the rightside, and inner nodes stored in the left side.
    
    try {
        if (innerlat.length != innerlong.length){
            throw "invalid path"
        }
            else{
            for (let i = 0; i < innerlat.length; i++){
               
                let pathNode : PathNode = new PathNode();
                pathNode.coordinate.x = innerlat[i];
                pathNode.coordinate.y = innerlong[i];
                pathNode.errorMargin = errorMargin;
                p1.leftSide.push(pathNode);
            }        
        }

    
        if (outerlat.length != outerlong.length){
            throw "invalid path"
        }
        else{
            for (let i = 0; i < outerlat.length; i++){
                let pathNode : PathNode = new PathNode();
                pathNode.coordinate.x = outerlat[i];
                pathNode.coordinate.y = outerlong[i];
                pathNode.errorMargin = errorMargin;
                p1.rightSide.push(pathNode);
            }        
        }
        
    } catch (error) {
        console.log(error)
    }
    p1.createSections()
    return p1;
}

