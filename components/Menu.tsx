import React from "react";
import { StyleSheet, Text, View, Button, Alert } from "react-native";

const Menu = ({ navigation }) => {
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
      <View>
        <Button
          accessibilityLabel="Enter the application"
          title="Enter"
          onPress={() => {
            navigation.navigate("Nav - page");
          }}
        ></Button>
        <Button
          accessibilityLabel="Enter the developer page"
          title="Developer"
          onPress={() => {
            navigation.navigate("Dev");
          }}
        ></Button>
      </View>
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

export default Menu;
