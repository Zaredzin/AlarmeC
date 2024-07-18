import {Text, View, Pressable, StyleSheet,TouchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Stack } from 'expo-router';
import React from 'react';
import TriggerIcon from '../indexComponents/TriggerIcon';

export function HomeTriggerView({triggerName, action, style}){
    let icon

    if ( action = "close"){
        icon = "door-closed"
    }if (action = "open"){
        icon = "door-open"

        
    };

    return(
        <View  style={[styles.triggerContainer,style]}>
            <Text style={styles.triggerContainerText}>{triggerName}</Text>
            <TouchableOpacity style={styles.triggerButton}>
                <TriggerIcon icon={icon} size={34} colorI={"black"}/>
                <Text style={styles.iconText}>{action}</Text>
            </TouchableOpacity>
                          
        </View>
    );
}
export function TempSensor({temp}){

    return(
        <Text style={{alignSelf:"center", fontSize:20, justifyContent:"space-between"}}>{temp}</Text>
    )

        
}
export function OxygenSensor({oxygenLevel}){
    return(
        <Text style={{alignSelf:"center", fontSize:20, justifyContent:"space-between"}}>{oxygenLevel}</Text>
    )
}
export function HumiditySensor({humidityLevel}){
    return(
        <Text style={{alignSelf:"center", fontSize:20, justifyContent:"space-between"}}>{humidityLevel}</Text>
    )
}
export function GasConcentration({gasLevel}){
    return(
        <Text style={{alignSelf:"center", fontSize:20, justifyContent:"space-between"}}>{gasLevel}</Text>
    )
}

const styles = StyleSheet.create({
    triggerContainer:{
        //height:80,
        alignSelf:"center",
        width:280,
        justifyContent:'center',
        flexDirection: "row",
        overflow:"hidden",
        marginVertical: 3,
        paddingVertical: 15,
        borderRadius: 12,
        marginHorizontal:8,
        textAlign: 'center',
        backgroundColor: "#00447c",
        alignItems:"center",
        alignContent:"center",
        shadowColor:"#000",
        shadowOffset: {width:1, height:0},
        shadowRadius:5,
    },
    triggerContainerText:{
        fontSize:22,
        color: "#f5f7fa",
        fontWeight: "400",
        justifyContent:'center',
        textAlign: 'center',
        alignSelf:"center",
        marginHorizontal:"auto",
        
    },
    triggerButton:{
        justifyContent:"center",
        alignSelf:"center",
        borderRadius:15,
        backgroundColor:"white",
        marginHorizontal:"auto",
        paddingHorizontal:"5%",
        elevation: 5,
        
        height:65,
        shadowColor:"#000",
        shadowOffset: {width:1, height:0},
        shadowRadius:5,
    },
    iconText:{
        borderTopWidth:1,
        borderTopColor: "gray",
        textAlign:"center",
    }
})