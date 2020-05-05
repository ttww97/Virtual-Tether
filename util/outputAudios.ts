import { shallowEqual, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
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

  useEffect(() => {
    console.log("Constant value changed to " + algorithmMessage);
    for (let i = 0; i < audios.length; i++) {
      if (audios[i].range.isInRange(algorithmMessage)) {
        //const audioFile = require(`../assets/audios/${audios[i].output}.mp3`);
        const statusPalay = { shouldPlay: true };
        playbackObject = Audio.Sound.createAsync(audios[i].output, statusPalay);
      }
    }
  }, [algorithmMessage]);
};
