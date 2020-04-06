import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Communication = () => {

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Communication</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text:{
        fontSize: 40
    }
  });
  

export default Communication;
