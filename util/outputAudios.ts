import { shallowEqual, useSelector } from "react-redux";
import { audios } from "./audioInstances";
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
  for (let i = 0; i < audios.length; i++) {
    if (audios[i].range.isInRange(algorithmMessage)) {
      const audioFile = require(`../assets/audios/${audios[i].output}.mp3`);
      const statusPalay = { shouldPlay: true };
      playbackObject = Audio.Sound.createAsync(audioFile, statusPalay);
    }
  }
};
