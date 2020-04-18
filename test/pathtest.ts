import { buildPath } from "../builders/pathbuilder";
import { Path } from "../types/Path";
import { innerLat, innerLong, outerLat, outerLong } from "../paths/fellows/fellows";
export function makeFellowsOval(): Path{
    return (buildPath("fellows",innerLat,innerLong,outerLat,outerLong,0));
}