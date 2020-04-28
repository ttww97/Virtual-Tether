import React, { useState, useEffect } from 'react';
import { Alert, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {updateGpsData} from "../../store/actions/gpsActions";
import {get_cartesian_dd, dropZ, Vector3} from "../../util/cartesian";
import {useDispatch} from "react-redux";
import { FellowsPath } from '../../paths/fellows/fellows';
import {IAlgorithmUpdateData} from "../../interfaces/AlgorithmInterface"
import { ICoordinate } from '../../interfaces/ICoordinate';

const GPS : React.FC = () =>{

	const dispatch = useDispatch();

	const [location, setLocation] = useState(null);
	const [path, setPath] = useState(FellowsPath);

	const findCoordinates = () => {
		navigator.geolocation.getCurrentPosition(
			position => {
				//This is now in a json format
				setLocation(position);
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
			path: path

		}
		updateGpsData(dispatch, gps);
	}

	//When the location value changes, update the store
	useEffect(()=> {
		if(location != null){
			console.log("location object:",location)
			updateStoreLocation();
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