import { IOutput } from "../interfaces/Communication";
import { range1 } from "../util/rangeInstances";
import { IRange } from "../interfaces/Range";

// implement the IOutput interface
class audioInstances implements IOutput {
  range: IRange;
  version: number;
  output: string;

  constructor(range: IRange, version: number, output: string) {
    this.range = range;
    this.version = version;
    this.output = output;
  }
}
// output the name of the sound track
const output1 = "camera";
// create an instance using range1 and export it
export const audio1 = new audioInstances(range1, 1, output1);
