import React from 'react';
import { StyleSheet, View, Button, Alert } from 'react-native';

const Develop = ({navigation}) => {
    return (
        <View style={styles.container}>
          <Button accessibilityLabel="GPS" title="GPS" onPress={()=>{navigation.navigate("Dev - GPS")}}></Button>
          <Button accessibilityLabel="Algorithm" title="Algorithm" onPress={()=>{navigation.navigate("Dev - Algorithm")}}></Button>
          <Button accessibilityLabel="Communications" title="Communication" onPress={() => {navigation.navigate("Dev - Communication")}}></Button>
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
  
    titleText: {
      color: "black",
      fontSize: 50,
      textAlign: "left"
    }
});
  

export default Develop;