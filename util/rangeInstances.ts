import { IRange } from "../interfaces/Range";
// implement the interface
// write the construction function and the isinRange function
class range implements IRange {
  min: number;
  max: number;
  constructor(min: number, max: number) {
    this.min = min;
    this.max = max;
  }
  isInRange(x: number): boolean {
    if (x >= this.min && x <= this.max) {
      return true;
    } else {
      return false;
    }
  }
}
// create an instance and export it
export const range1 = new range(1, 5);
