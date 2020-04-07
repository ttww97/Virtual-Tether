export interface IPath {
    name: string;
    leftSide: INode[];
    rightSide: INode[];
}

export interface INode {
    errorMargin : number;
    coordinate : ICoordinate;
}

export interface ICoordinate {
    x : number;
    y : number;
}