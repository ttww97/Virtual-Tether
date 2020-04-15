import { shallowEqual, useSelector } from "react-redux";
import { audio1 } from "./audioInstances";

// output the audio
export const output = () => {
  const algorithmMessage = useSelector(
    state => state.communication.constantValue,
    shallowEqual
  );
  // of the algorithmMessage is in the range1
  if (audio1.range.isInRange(algorithmMessage)) {
    console.log("In range, can output a audio");
  } else {
    console.log("out of range");
  }
};
