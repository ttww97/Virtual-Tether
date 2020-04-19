import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  Alert,
  TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const MainWelcome = ({ navigation }) => {
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

      <View style={styles.banner}>
        <Icon
          name="edit"
          size={30}
          color="#6CB4EE"
          style={styles.bannerIcon}
          accessibilityLabel="edit personal information button"
        />
        <View style={styles.bannerImgContainer}>
          <Image
            accessible={true}
            source={require("../../assets/selfie.jpg")}
            style={styles.selfie}
            accessibilityLabel="profile picture"
          />
        </View>
        <Text style={styles.name} accessibilityLabel="name Dave Fluid">
          Dave Fluid
        </Text>
        <Text
          style={styles.address}
          accessibilityLabel="address San Francisco, CA"
        >
          San Francisco, CA
        </Text>
        <Text
          style={styles.emergency}
          accessibilityLabel="Emergency Contact: John Smith"
        >
          Emergency Contact: John Smith
        </Text>
        <Text
          style={styles.emergency}
          accessibilityLabel="Emergency Number: 0123456"
        >
          Emergency Number: 0123456
        </Text>
      </View>

      <View style={styles.select}>
        <TouchableOpacity
          accessibilityLabel="select path button"
          onPress={() => {
            Alert.alert("Simple Button pressed");
          }}
        >
          <View
            style={{
              backgroundColor: "//#endregion6CB4EE",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 15,
              height: 100
            }}
          >
            <Text style={{ color: "white", fontSize: 30, height: 30 }}>
              SELECT PATH
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.startPath}>
        <Text style={styles.startPathText} accessibilityLabel="start path">
          Start Path
        </Text>
        <TouchableOpacity
          onPress={() => {
            Alert.alert("Simple Button pressed");
          }}
        >
          <View>
            <Icon
              name="arrow-circle-right"
              size={30}
              color="#fff"
              style={styles.startPathButton}
              accessibilityLabel="start path button"
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
    justifyContent: "center",
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

  banner: {
    flex: 0.5,
    flexDirection: "column",
    justifyContent: "flex-start",

    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "#C0C0C0",
    borderBottomStartRadius: 50,
    borderBottomEndRadius: 50
  },

  bannerIcon: {
    textAlign: "right",
    fontSize: 40,
    marginRight: 15,
    marginTop: 10
  },

  bannerImgContainer: {
    flex: 0.8,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center"
  },

  selfie: {
    width: 100,
    height: 100,
    borderRadius: 50
  },

  name: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "500",
    marginBottom: 20,
    marginTop: 5
  },

  address: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: "400",
    marginBottom: 20
  },

  emergency: {
    textAlign: "center",
    fontSize: 22,
    fontWeight: "400",
    marginBottom: 20
  },

  select: {
    width: "100%",
    flex: 0.2,
    textAlign: "center",
    justifyContent: "center",
    paddingHorizontal: 40,
    paddingVertical: 10
  },

  startPath: {
    flex: 0.3,
    width: "100%",
    textAlign: "center",
    justifyContent: "center"
  },

  startPathText: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "400"
  },

  startPathButton: {
    textAlign: "center",
    fontSize: 150,
    color: "red"
  }
});

export default MainWelcome;
