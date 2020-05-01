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

const Navigation = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.time}>
        <View style={styles.timeText}>
          <Text style={styles.bigText} accessibilityLabel="Time">
            Time
          </Text>
          <Text
            style={styles.smallText}
            accessibilityLabel="12 minutes 37 seconds left"
          >
            12m 37s
          </Text>
        </View>
        <View style={styles.attentionIcon}>
          <Icon
            name="exclamation-triangle"
            size={wp("25%")}
            color="red"
            accessibilityLabel="attention icon"
          />
        </View>
      </View>
      <View style={styles.distance}>
        <Text style={styles.bigText} accessibilityLabel="Distance">
          Distance
        </Text>
        <Text style={styles.smallText} accessibilityLabel="0.8 kilometers left">
          0.8 km
        </Text>
      </View>
      <View style={styles.laps}>
        <Text style={styles.bigText} accessibilityLabel="laps">
          laps
        </Text>
        <Text style={styles.smallText} accessibilityLabel="1/3 left">
          1/3
        </Text>
      </View>
      <View style={styles.cancel}>
        <TouchableOpacity
          accessibilityLabel="cancel the navigation button"
          onPress={() => {
              navigation.navigate("Welcome - page")
          }}
        >
          <View
            style={{
              backgroundColor: "red",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 15,
              height: hp("10%")
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: wp("10%"),
                fontWeight: "400"
              }}
            >
              CANCEL
            </Text>
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
    justifyContent: "flex-start",
    flexDirection: "column"
  },

  bigText: {
    fontSize: wp("15%")
  },
  smallText: {
    fontSize: wp("10%")
  },
  time: {
    height: hp("20%"),
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%",
    paddingLeft: wp("5%"),
    paddingRight: wp("5%")
  },

  timeText: {
    flex: 0.5,
    justifyContent: "center"
  },
  attentionIcon: {
    justifyContent: "center",
    alignItems: "center",
    flex: 0.5
  },

  distance: {
    height: hp("20%"),
    justifyContent: "center",
    width: "100%",
    paddingLeft: wp("5%"),
    paddingRight: wp("5%")
  },
  laps: {
    height: hp("20%"),
    justifyContent: "center",
    width: "100%",
    paddingLeft: wp("5%"),
    paddingRight: wp("5%")
  },
  cancel: {
    height: hp("20%"),
    width: "100%",
    justifyContent: "center",
    paddingLeft: wp("5%"),
    paddingRight: wp("5%")
  }
});

export default Navigation;
