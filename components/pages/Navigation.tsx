import React, { useEffect, useState } from "react";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import Icon from "react-native-vector-icons/FontAwesome";
import { updateLocation } from "../../store/actions/gpsActions";
import { dropZ, get_cartesian_dd, Vector3 } from "../../util/cartesian";
import {useDispatch} from "react-redux";

const Navigation = ({ navigation }) => {

  const dispatch = useDispatch();

  const [location, setLocation] = useState(null);
	const [timestamp, setTimeStamp] = useState(null);

	const findCoordinates = () => {
		navigator.geolocation.getCurrentPosition(
			position => {
				//This is now in a json format
				setLocation(position);
				// Get timestamp and jsonify
				let tempTime = {"timestamp": position['timestamp']};
				let toJson = JSON.stringify(tempTime)
				setTimeStamp(toJson);
			},
			error => Alert.alert(error.message),
			{ enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
		);
	};

	const updateStoreLocation = () => {
		//Convert from the returned type to cartesian vector 3
		const vec3 : Vector3 = get_cartesian_dd(location.coords.latitude, location.coords.longitude);
		//drop the z to make it an x,y coordinate
		const cartesian_coordinates = dropZ(vec3);
		//Dispatch an action to update the current location in the store.
		updateLocation(dispatch, cartesian_coordinates);
	}


	// This will continuously compare stored location and current location
	// If they are different, update location
	useEffect(() => {
			const watchId = navigator.geolocation.watchPosition(
				position => {
					if (location == null){
						findCoordinates();
					} else {
						if (location['coords'] != position['coords']) {
							setLocation(position);
							updateStoreLocation();
						}
					}
				},
				error => Alert.alert(error.message),
				{ enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
			);
    //I swapped this from polling which did work to a built in subscriber model
    //This watchPosition only updates when the location moves and is more performant
		return () => {navigator.geolocation.clearWatch(watchId)};
	}, [location])

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
