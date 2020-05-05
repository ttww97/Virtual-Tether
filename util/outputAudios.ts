import { shallowEqual, useSelector } from "react-redux";
import { audio1 } from "./audioInstances";
import { Audio } from "expo-av";

export const output = () => {
  // inisialise the audio object
  let playbackObject: object;
  // get the value from the algorithm
  const algorithmMessage = useSelector(
    state => state.communication.constantValue,
    shallowEqual
  );
  // if the algorithmMessage is in the range1, play the audio1
  if (audio1.range.isInRange(algorithmMessage)) {
    const audioFile = require(`../assets/audios/camera.mp3`);
    const statusPalay = { shouldPlay: true };
    playbackObject = Audio.Sound.createAsync(audioFile, statusPalay);
    console.log("In range, can output a audio");
  } else {
    console.log("out of range, no correspondent audio ");
  }
};
