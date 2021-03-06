import React, { useState, useEffect } from 'react';
import { Alert, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {updateGpsData, updatePath} from "../../store/actions/gpsActions";
import {get_cartesian_dd, dropZ, Vector3} from "../../util/cartesian";
import {useDispatch} from "react-redux";
import { makeFellowsOval } from '../../test/pathtest';
import {IAlgorithmUpdateData} from "../../interfaces/AlgorithmInterface"
import { ICoordinate } from '../../interfaces/ICoordinate';
import { Path } from '../../types/Path';

const GPS : React.FC = () =>{

	const dispatch = useDispatch();
	let gpsUpdateFrequency :number = 500;
	const [location, setLocation] = useState(null);
	const [timestamp, setTimeStamp] = useState(null);

	//Use fellows oval by default, in future we should make this selectable
	const [path, setPath] = useState(makeFellowsOval());
	var firstLocation: Boolean = false;

	const findCoordinates = () => {
		firstLocation = true;
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
		const cartesian_coordinates : ICoordinate = dropZ(vec3);
		//Dispatch an action to update the current location in the store.
		const gps : IAlgorithmUpdateData = {
			location: cartesian_coordinates,
			time: {time : Date.now()},
		}
		updateGpsData(dispatch, gps);
	}

	useEffect(()=> {
		if(path != null){
			updatePath(dispatch, path);
		}
	}, [path])
	// Show the timestamp
	// useEffect(() => {
	// 	if (timestamp != null){
	// 		console.log(timestamp);
	// 	}
	// }, [timestamp])

	// This will continuously compare stored location and current location
	// If they are different, update location
	useEffect(() => {
		if (firstLocation) {
			const interval = setInterval(() => {
				navigator.geolocation.getCurrentPosition(
					position => {
						if (location == null){
							findCoordinates();
						} else {
							if (location['coords'] != position['coords']) {
								setLocation(position);
								updateStoreLocation();
								console.log('update done')
							}
						}
					},
					error => Alert.alert(error.message),
					{ enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
				);
			}, gpsUpdateFrequency);
			return () => clearInterval(interval);
		}
	}, [location])

	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={findCoordinates}>
				<Text style={styles.welcome}>Find My Coords?</Text>
				<Text>Location: {JSON.stringify(location)}</Text>
			</TouchableOpacity>
		</View>
	);
}


export default GPS;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10
	}
  });