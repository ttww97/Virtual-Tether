import { PathNode, PathSection, Path } from './Path'
import Vec2d from './Vec2d'
import { buildPath } from '../builders/pathbuilder'
import { innerLat, innerLong, outerLat, outerLong } from '../paths/testpath/testpath'

let p : Path = buildPath("testpath", innerLat,innerLong,outerLat,outerLong,0);
console.log(p)


