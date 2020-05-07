import { IOutput } from "../interfaces/Communication";
import { range1, range2 } from "../util/rangeInstances";
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

// create an instance using range1 and export it
const audio1 = new audioInstances(
  range1,
  1,
  require("../assets/audios/camera.mp3")
);
const audio2 = new audioInstances(
  range2,
  1,
  require("../assets/audios/piano.mp3")
);

export const audios = [audio1, audio2];
