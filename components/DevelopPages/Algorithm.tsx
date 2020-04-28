import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button} from 'react-native';
import {useDispatch, useSelector} from "react-redux";
import {updateConstant} from "../../store/actions/communicationActions";
import {IAlgorithmUpdateData} from "../../interfaces/AlgorithmInterface"
import { Path } from '../../types/Path';

const Algorithm = () => {

    const dispatch = useDispatch();

    const algorithmMessage = useSelector(state => state.gps.currentLocation);
    const [test, setTest] = useState("0");
    const gpsData: IAlgorithmUpdateData = useSelector(state => state.gps.data);
    const path : Path = useSelector(state => state.gps.path);

    // On input update run the algorithm and dispatch result
    useEffect(() => {
        console.log("Changed the gpsData value to: ", gpsData);
        const result = generateConstantValue();
        sendConstValue(result);
    }, [gpsData])

    const outOfPath = (path, location) => {
        return true;
    }

    const stayTooLong = (location, time) => {
        return false;
    }

    // 3 means high risk actions and should give warnings
    // 2 means potential accidents and should provide asking
    // 1 means all good and should keep providing navigation
    const generateConstantValue = () => {
        let p = path;
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

    const sendConstValue = (value) => {
        updateConstant(dispatch, value);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Algorithm</Text>
            <Text>currentLocation: {JSON.stringify(gpsData.location)}</Text>
            <View style={styles.inputBox} ><Text>Enter ConstantValue</Text><TextInput keyboardType={"numeric"} onChangeText={setTest} value={test}/></View>
            <Button title="Submit"  onPress={()=>{
                sendConstValue(test);
            }}/>
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
