export interface IRange {
    min : number;
    max : number;
    
    isInRange(x:number): boolean;
}