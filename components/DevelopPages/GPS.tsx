import React, { Component, useState} from 'react';
import { Alert, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class GPS extends Component {
	state = {
		location: null,
	};

	time = () => {
		const [timestamp, setTimeStamp] = useState("0");

	}

	findCoordinates = () => {
		navigator.geolocation.getCurrentPosition(
			position => {
				const location = JSON.stringify(position);
				this.setState({ location: location });
			},
			error => Alert.alert(error.message),
			{ enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
		);
	};

	render() {
		return (
			<View style={styles.container}>
				<TouchableOpacity onPress={this.findCoordinates}>
					<Text style={styles.welcome}>Find My Coords?</Text>
					<Text>Location: {this.state.location}</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

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
  

// export default GPS;
