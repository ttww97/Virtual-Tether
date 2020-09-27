import { Path,Line,PathSection,PathNode} from "../types/Path";
import Vec2d from "../types/Vec2d";
import { Vector2 } from "expo/build/AR";

export const getBestDirection = (path : Path, current_location : Vec2d) =>{
    let leftVector : Vec2d;
    let rightVector : Vec2d;
    let checkVector : Vec2d;
    try {
        let starting_section = path.getCurrentSection(current_location);
        if (starting_section == PathSection.invalidPath){
            throw "Invalid Path";
        }
        leftVector = starting_section.left2.coordinate.subtract(current_location);
        rightVector = starting_section.right2.coordinate.subtract(current_location);
        let i;
        for (i = path.leftSide.indexOf(starting_section.left2) + 1;
                 i < path.leftSide.length; 
                 i++) 
        {
            let failed : Boolean = false;
            // check if the left node is within the angle, if it is, tighten the angle.
            checkVector = path.leftSide[i].coordinate.subtract(current_location);
            if (Line.checkInRange(leftVector,rightVector,checkVector)){
                leftVector = checkVector.copy();
            }
            else{failed = true}

            // check if the right node is within the angle, if it is, tighten the angle.
            checkVector = path.rightSide[i].coordinate.subtract(current_location);
            if (Line.checkInRange(leftVector,rightVector,checkVector)){
                rightVector = checkVector.copy();
                failed = false;
            }
            else{failed = true}
            // case that both of the nodes were out of range
            if (failed) break
        }
    return (leftVector.add(rightVector).scalarMult(0.5))
    
    } catch (error) {
        console.log(error);
    }
   
    
  

        

        
}