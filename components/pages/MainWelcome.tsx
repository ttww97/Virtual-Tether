import React from "react";
import { StyleSheet, View, Button, Alert } from "react-native";

const MainWelcome = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        accessibilityLabel="Return to menu"
        title="Home"
        onPress={() => {
          navigation.navigate("Home");
        }}
      ></Button>
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

export default MainWelcome;
