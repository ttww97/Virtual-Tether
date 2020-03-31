import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Algorithm = () => {

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Algorithm</Text>
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
  

export default Algorithm;
