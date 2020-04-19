import React from "react";
import { StyleSheet, Text, View, Button, Alert } from "react-native";

const Navigation = ({ navigation }) => {
  const AlertTheUser = () => {
    Alert.alert(
      "WIP",
      "function coming soon",
      [{ text: "OK", onPress: () => console.log("OK Pressed") }],
      { cancelable: false }
    );
  };

  return (
    <View style={styles.container}>
      <Text
        style={styles.titleText}
        accessibilityLabel="Welcome to virtual tether"
      >
        Virtual Tether
      </Text>
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

  titleText: {
    color: "black",
    fontSize: 50,
    textAlign: "left"
  }
});

export default Navigation;
