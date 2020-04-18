import React from "react";
import {
  StyleSheet,
  View,
  Button,
  Alert,
  Text,
  Image,
  Dimensions
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import DropdownMenu from "react-native-dropdown-menu";

const MainWelcome = ({ navigation }) => {
  var pathData = [["Fellow Oval", "Green Oval"]];
  const screenWidth = Math.round(Dimensions.get("window").width);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Virtual Tether</Text>
        <Icon name="bars" size={30} color="#fff" />
      </View>

      <View style={styles.banner}>
        <Icon name="rocket" size={30} color="#fff" style={styles.bannerIcon} />
        <View style={styles.bannerImgContainer}>
          <Image
            source={require("../../assets/selfie.jpg")}
            style={styles.selfie}
          />
        </View>
        <Text style={styles.name}>Dave Fluid</Text>
        <Text style={styles.address}>San Francisco, CA</Text>
        <Text style={styles.emergency}>Emergency Contact: John Smith</Text>
        <Text style={styles.emergency}>Emergency Number: 0123456</Text>
      </View>

      <View style={styles.select}>
        <Text style={styles.selectPath}>Select Path</Text>
        <DropdownMenu
          data={pathData}
          bgColor="#c0c0c0"
          titleStyle={{ fontSize: 20, color: "#000000" }}
          optionTextStyle={{ fontSize: 18, color: "#000000" }}
        />
      </View>

      <View style={styles.twoButtons}>
        <View styles={styles.buttonOne}></View>
        <View styles={styles.buttonTwo}></View>
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
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 60,
    width: "100%",
    backgroundColor: "#C0C0C0",
    position: "absolute",
    top: 0,
    paddingLeft: 15,
    paddingRight: 15
  },

  headerText: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "500"
  },

  banner: {
    width: "100%",
    height: 350,
    position: "absolute",
    top: 60,
    borderBottomWidth: 1,
    borderBottomColor: "#C0C0C0",
    borderBottomStartRadius: 50,
    borderBottomEndRadius: 50,
    backgroundColor: "green"
  },

  bannerIcon: {
    textAlign: "right",
    marginRight: 15,
    marginTop: 15,
    marginBottom: 15
  },
  bannerImgContainer: {
    flex: 0.6,
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
    marginBottom: 10,
    marginTop: 5
  },
  address: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: "400",
    marginBottom: 5
  },
  emergency: {
    textAlign: "center",
    fontSize: 22,
    fontWeight: "400"
  },

  select: {
    backgroundColor: "red",
    width: "100%",
    height: 150,
    position: "absolute",
    top: 410,
    paddingHorizontal: 40,
    paddingVertical: 10
  },
  selectPath: {
    fontSize: 25,
    marginBottom: 10
  },
  twoButtons: {
    position: "absolute",
    top: 560,
    backgroundColor: "yellow",
    width: "100%"
  },
  buttonOne: {},
  buttonTwo: {}
});

export default MainWelcome;
