import { IOutput } from "../interfaces/Communication";
import { range1 } from "../util/rangeInstances";
import { IRange } from "../interfaces/Range";

//let output1URL = require("../assets/audios/camera-shutter-lens.mp3");

// implement the IOutput interface
class audioInstances implements IOutput {
  range: IRange;
  version: number;
  output: object;

  constructor(range: IRange, version: number, output: object) {
    this.range = range;
    this.version = version;
    this.output = output;
  }
}
const output1 = [];
// create an instance using range1 and export it
export const audio1 = new audioInstances(range1, 1, output1);
