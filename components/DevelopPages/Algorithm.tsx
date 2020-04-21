import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button} from 'react-native';
import {useDispatch, useSelector} from "react-redux";
import {updateConstant} from "../../store/actions/communicationActions";
import {IAlgorithmUpdateData} from "../../interfaces/AlgorithmInterface"

const Algorithm = () => {

    const dispatch = useDispatch();

    const algorithmMessage = useSelector(state => state.gps.currentLocation);
    const [test, setTest] = useState("0");

    // Should get data from GPS
    const gpsData: IAlgorithmUpdateData = {
        path: null,
        location: null,
        time: null
    };

    const outOfPath = (path, location) => {
        return false;
    }

    const stayTooLong = (location, time) => {
        return false;
    }

    // 3 means high risk actions and should give warnings
    // 2 means potential accidents and should provide asking
    // 1 means all good and should keep providing navigation
    const generateConstantValue = () => {
        let p = gpsData.path;
        let l = gpsData.location;
        let t = gpsData.time;

        if (outOfPath(p, l)){
            return 3;
        } else if (stayTooLong(l, t)){
            return 2;
        } else {
            return 1;
        }
    }

    const sendMessage = () => {
        updateConstant(dispatch, test)
        setTest("");
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Algorithm</Text>
            <Text>currentLocation: {JSON.stringify(algorithmMessage)}</Text>
            <View style={styles.inputBox} ><Text>Enter ConstantValue</Text><TextInput keyboardType={"numeric"} onChangeText={setTest} value={test}/></View>
            <Button title="Submit"  onPress={sendMessage}/>
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
    },
    inputBox:{ 
        height: 40,
        borderBottomColor: "gray",
        borderWidth: 0,
        borderBottomWidth: 1,
        margin: 20,
        width: "60%",
    }

  });
  

export default Algorithm;
