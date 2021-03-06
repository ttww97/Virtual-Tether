import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import Swiper from "react-native-swiper";

const Selection = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.titleText} accessibilityLabel="Current path">
          Current Path:
        </Text>
      </View>
      <Swiper
        style={styles.wrapper}
        showsButtons={true}
        accessibilityTraits="allowsDirectInteraction"
      >
        <View style={styles.slide}>
          <Text
            style={styles.text}
            accessibilityLabel="Fellow oval selected, swipe to select other paths"
          >
            Fellow Oval
          </Text>
        </View>
        <View style={styles.slide}>
          <Text
            style={styles.text}
            accessibilityLabel="Green oval selected, swipe to select other paths"
          >
            Green Oval
          </Text>
        </View>
        <View style={styles.slide}>
          <Text
            style={styles.text}
            accessibilityLabel="Pink oval selected, swipe to select other paths"
          >
            Pink Oval
          </Text>
        </View>
      </Swiper>
      <View style={styles.buttonArea}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Welcome - page")
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
            navigation.navigate("Welcome - page")
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
  },
  wrapper: {},

  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#97CAE5"
  },

  text: {
    color: "#fff",
    fontSize: wp("12%"),
    fontWeight: "bold"
  }
});

export default Selection;
