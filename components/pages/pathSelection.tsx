import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import Swipe from "./Swipe";

const Selection = ({ navigation }) => {
  const AlertTheUser = () => {
    Alert.alert(
      "WIP",
      "function coming soon",
      [{ text: "OK", onPress: () => console.log("OK Pressed") }],
      { cancelable: false }
    );
  };

  const LeftActions = () => {
    return (
      <View>
        <Text>Add to cart</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.titleText} accessibilityLabel="Current path">
          Current Path:
        </Text>
      </View>
      <Swipe />
      <View style={styles.buttonArea}>
        <TouchableOpacity
          onPress={() => {
            Alert.alert("Simple Button pressed");
          }}
        >
          <View>
            <Icon
              name="undo"
              size={30}
              color="#fff"
              style={styles.iconUndo}
              accessibilityLabel="Return button"
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            Alert.alert("Simple Button pressed");
          }}
        >
          <View>
            <Icon
              name="check"
              size={30}
              color="#fff"
              style={styles.iconOk}
              accessibilityLabel="Confirm button"
            />
          </View>
        </TouchableOpacity>
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

  textContainer: {
    flex: 0.2,
    alignItems: "center",
    justifyContent: "center"
  },

  titleText: {
    color: "black",
    fontSize: hp("6%")
  },

  buttonArea: {
    flex: 0.4,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around"
  },

  iconUndo: {
    fontSize: wp("25%"),
    color: "#6CB4EE"
  },
  iconOk: {
    fontSize: wp("25%"),
    color: "red"
  }
});

export default Selection;
