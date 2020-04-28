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

	const [location, setLocation] = useState(null);

	//Use fellows oval by default, in future we should make this selectable
	const [path, setPath] = useState(makeFellowsOval());

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
		}
		updateGpsData(dispatch, gps);
	}

	//When the location value changes, update the store
	useEffect(()=> {
		if(location != null){
			updateStoreLocation();
		}
	}, [location])

	//When the path value changes, update the store
	useEffect(()=> {
		if(path != null){
			updatePath(dispatch, path);
		}
	}, [path])

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