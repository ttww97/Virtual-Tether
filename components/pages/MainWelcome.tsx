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
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

const MainWelcome = ({ navigation }) => {
  return (
    <View style={styles.container}>
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
            navigation.navigate("Selection - page");
          }}
        >
          <View
            style={{
              backgroundColor: "#6CB4EE",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 15,
              height: hp("10%")
            }}
          >
            <Text style={{ color: "white", fontSize: hp("4%") }}>
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
            navigation.navigate("Nav - page");
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

  banner: {
    height: hp("50%"),
    flexDirection: "column",
    justifyContent: "flex-start",
    width: wp("100%"),
    borderBottomWidth: 1,
    borderBottomColor: "#C0C0C0",
    borderBottomStartRadius: 50,
    borderBottomEndRadius: 50
  },

  bannerIcon: {
    textAlign: "right",
    fontSize: wp("12%"),
    marginRight: wp("5%"),
    marginTop: hp("0.5%")
  },

  bannerImgContainer: {
    height: hp("13%"),
    marginBottom: hp("1%"),
    justifyContent: "center",
    alignItems: "center"
  },

  selfie: {
    width: wp("22%"),
    height: wp("22%"),
    borderRadius: 50
  },

  name: {
    textAlign: "center",
    fontSize: wp("7%"),
    fontWeight: "500",
    marginBottom: hp("1.5%"),
    marginTop: hp("1%")
  },

  address: {
    textAlign: "center",
    fontSize: wp("6.5%"),
    fontWeight: "400",
    marginBottom: hp("1.5%")
  },

  emergency: {
    textAlign: "center",
    fontSize: wp("6%"),
    fontWeight: "400",
    marginBottom: hp("1.5%")
  },

  select: {
    width: "100%",
    height: hp("10%"),

    textAlign: "center",
    justifyContent: "center",
    paddingHorizontal: wp("5%")
  },

  startPath: {
    height: hp("30%"),
    width: "100%",
    textAlign: "center",
    justifyContent: "center"
  },

  startPathText: {
    textAlign: "center",
    fontSize: hp("4%"),
    fontWeight: "400"
  },

  startPathButton: {
    textAlign: "center",
    fontSize: hp("15%"),
    color: "red"
  }
});

export default MainWelcome;
