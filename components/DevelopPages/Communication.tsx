import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { shallowEqual, useSelector } from "react-redux";
import { output } from "../../util/outputAudios";

const Communication = () => {
  output();
  const algorithmMessage = useSelector(
    state => state.communication.constantValue,
    shallowEqual
  );

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Communication</Text>
      <Text>ConstantValue is: {algorithmMessage}</Text>
      <Text>value from audioOutputs is: {algorithmMessage}</Text>
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
