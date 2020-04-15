import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button} from 'react-native';
import {useDispatch} from "react-redux";
import {updateConstant} from "../../store/actions/communicationActions";

const Algorithm = () => {

    const dispatch = useDispatch();

    const [test, setTest] = useState("0");


    const sendMessage = () => {
        updateConstant(dispatch, test)
        setTest("");
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Algorithm</Text>
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
