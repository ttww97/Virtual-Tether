import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

export default function App() {

  return (
    <View style={styles.container}>
      <Text style={styles.titleText} accessibilityLabel="Welcome to virtual tether">Virtual Tether</Text>
      <Button accessibilityLabel="Enter the application" title="Enter" onPress={AlertTheUser}></Button>
    </View>
  );
}

const AlertTheUser = () => {
  Alert.alert(
    'WIP',
    'function coming soon',
    [
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ],
    { cancelable: false }
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  titleText: {
    color: "black",
    fontSize: 50,
    textAlign: "left"
  }
});
