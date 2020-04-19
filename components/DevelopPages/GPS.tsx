import React, { Component } from 'react';
import { Alert, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class GPS extends Component {
	state = {
		location: null,
		currentTime: null
	};

	// Add timestamp function
	getCurrentTime = () => {
		const date = new Date();
		let month: String | Number = date.getMonth() + 1;
		let timestamp: String = date.getFullYear() + "-" + month + "-" + date.getDate() + " "
								 + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

		this.setState({currentTime: timestamp})
	};

	findCoordinates = () => {
		navigator.geolocation.getCurrentPosition(
			position => {
				const location = JSON.stringify(position);

				this.setState({ location });
			},
			error => Alert.alert(error.message),
			{ enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
		);
	};

	// Add combined function that when cliking the button, it can call two functions
	combineFunction = () => {
		this.getCurrentTime();
		this.findCoordinates();
	}

	render() {
		return (
			<View style={styles.container}>
				<TouchableOpacity onPress={this.combineFunction}>
					<Text style={styles.welcome}>Find My Coords?</Text>
					<Text>Location: {this.state.location}</Text>
					<Text>Timestamp: {this.state.currentTime}</Text>
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
