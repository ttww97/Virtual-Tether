import { PathNode, PathSection } from './Path'
import Vec2d from './Vec2d'
var demo: Vec2d = new Vec2d(3, 2);

var leftup: Vec2d = new Vec2d(0, 0);

var rightup: Vec2d = new Vec2d(2, 0);

var leftdown: Vec2d = new Vec2d(0, 2);

var rightdown : Vec2d = new Vec2d(2, 2);
var demoP = new PathSection(new PathNode(0,leftup),new PathNode(0,rightup),new PathNode(0,leftdown),new PathNode(0,rightdown));

let a = demoP.isInside(demo);

console.log(a);

