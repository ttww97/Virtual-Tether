import { Path,PathNode } from "../types/Path";
import { placeholderv3d } from "../types/placeholderv3d";
import { get_cartesian_dd } from "../util/cartesian";
import { Vec2d } from "../types/Vec2D";


export function buildPath(name: string,
                     innerlat : number[], innerlong: number[],
                     outerlong: number[], outerlat : number[],
                     errorMargin: number)
                    : Path {
   
    let path : Path;
    //builds a path with outer coord stord in the rightside, and inner nodes stored in the left side.
    
    if (innerlat.length == innerlong.length){
        for (let i = 0; i < innerlat.length; i++){
            let vec3 : placeholderv3d;
            vec3 = get_cartesian_dd(innerlat[i], innerlong[i]);
            let pathNode : PathNode;
            pathNode.coordinate.x = vec3.x;
            pathNode.coordinate.y = vec3.y;
            pathNode.errorMargin = errorMargin;
            path.leftSide.push(pathNode);
        }        
    }

    if (outerlat.length == outerlong.length){
        for (let i = 0; i < outerlat.length; i++){
            let vec3 : placeholderv3d;
            vec3 = get_cartesian_dd(outerlat[i], outerlong[i]);
            let pathNode : PathNode;
            pathNode.coordinate.x = vec3.x;
            pathNode.coordinate.y = vec3.y;
            pathNode.errorMargin = errorMargin;
            path.rightSide.push(pathNode);
        }        
    }
    return path;
}

