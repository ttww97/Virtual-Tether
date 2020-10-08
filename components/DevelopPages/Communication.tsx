import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { shallowEqual, useSelector } from "react-redux";
import { output } from "../../util/outputAudios";
import { Audio } from "expo-av";


const Communication = () => {
  output();
  const algorithmMessage = useSelector(
    state => state.communication.constantValue,
    shallowEqual
  );

  function playSound() {
    Audio.requestPermissionsAsync();
    Audio.getPermissionsAsync();
    Audio.setIsEnabledAsync(true);

    if (algorithmMessage == 0) {
      const statusPlay = {shouldPlay: true};
      Audio.Sound.createAsync(require('../../assets/audios/KeepMoving.mp3'), statusPlay);
    }else if (algorithmMessage == 1){
      const statusPlay = {shouldPlay: true};
      Audio.Sound.createAsync(require('../../assets/audios/Emergent.mp3'), statusPlay);
    }

  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Communication</Text>
      <Text>ConstantValue is: {algorithmMessage}</Text>
      <Text>value from audioOutputs is: {algorithmMessage}</Text>
      <Button title="Play sound" onPress = {() => {playSound()}}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontSize: 40
  }
});

export default Communication;
