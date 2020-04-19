import React from "react";
import { StyleSheet, Text, View, Button, Alert } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

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
      <View style={styles.header}>
        <Text style={styles.headerText} accessibilityLabel="Virtual Tether">
          Virtual Tether
        </Text>

        <Icon
          name="bars"
          size={30}
          color="#fff"
          accessibilityLabel="menu bar button"
        />
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

  header: {
    flex: 0.1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#C0C0C0",
    paddingLeft: 15,
    paddingRight: 15
  },

  headerText: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "500"
  }
});

export default Navigation;
