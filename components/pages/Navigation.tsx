import React from "react";
import { StyleSheet, Text, View, Button, Alert } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const Navigation = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText} accessibilityLabel="Navigation">
          Navigation
        </Text>

        <Icon
          name="bars"
          size={30}
          color="#fff"
          accessibilityLabel="menu bar button"
        />
      </View>

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
            size={80}
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
  },
  bigText: {
    fontSize: 50
  },
  smallText: {
    fontSize: 30
  },
  time: {
    flex: 0.2,
    justifyContent: "space-between",
    flexDirection: "row",

    width: "100%",
    paddingLeft: 15,
    paddingRight: 15
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
    flex: 0.2,
    justifyContent: "center",

    width: "100%",
    paddingLeft: 15,
    paddingRight: 15
  },
  laps: {
    flex: 0.2,
    justifyContent: "center",

    width: "100%",
    paddingLeft: 15,
    paddingRight: 15
  }
});

export default Navigation;
