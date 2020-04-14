// The communication interface will get two values

export interface ICommunication {
  // the value from the algorithm interface
  // to indicate the current state of the users
  valueFromAlgorithm: number;

  // The value from the user activities to
  // indicate which version of audios is chosen
  AudioVersionFromUA: number;
  audio: IAudio[];
}

// According to the two values get from algorithm and user activity
// we will find the correspondent sound to play out

export interface IAudio {
  // array of number of length 2 to indicate a range
  value: number[];
  // the version
  version: number;
  // if the valueFromAlgorithm is inside of the range
  // combined with the version
  // we will play the correspondent sound
  sound: object;
}
