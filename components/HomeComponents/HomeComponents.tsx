import {Text, View, Pressable, StyleSheet,TouchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Stack } from 'expo-router';
import React from 'react';
import TriggerIcon from '../indexComponents/TriggerIcon';

export function HomeTriggerView({triggerName, action}){
    let icon

    if ( action = "close"){
        icon = "door-closed"
    }if (action = "open"){
        icon = "door-open"

        
    };

    return(
        <View  style={styles.triggerContainer}>
            <Text style={styles.triggerContainerText}>{triggerName}</Text>
            <TouchableOpacity style={styles.triggerButton}>
                <TriggerIcon icon={icon} size={34} colorI={"black"}/>
                <Text style={styles.iconText}>{action}</Text>
            </TouchableOpacity>
                          
        </View>
    );
}

const styles = StyleSheet.create({
    triggerContainer:{
        height:80,
        alignSelf:"center",
        width:280,
        justifyContent:'center',
        flexDirection: "row",
        overflow:"hidden",
        
        //borderWidth: 1,
        borderRadius: 12,
        //borderColor: '#2ad',
        textAlign: 'center',
        paddingVertical: 15,
        marginHorizontal:8,
        //elevation:5,
        marginVertical: 3,

        


        backgroundColor: "#00447c",
    },
    triggerContainerText:{
        fontSize:22,
        color: "#f5f7fa",
        fontWeight: "400",
        justifyContent:'center',
        textAlign: 'center',
        alignSelf:"center",
        marginHorizontal:"auto",
        //textShadowColor: 'rgba(0,0,0,0.2)',
        //textShadowRadius:3,
        //textShadowOffset:{
        //    width:2,height:1,
        //}
        //textShadowColor: 'rgba(0,0,0,0.2)',
        //textShadowRadius:3,
        //textShadowOffset:{
        //    width:2,height:1,
        //}
    },
    triggerButton:{
        justifyContent:"center",
        alignSelf:"center",
        borderRadius:15,
        backgroundColor:"white",
        marginHorizontal:"auto",
        paddingHorizontal:"5%",
        elevation: 5,
        //borderWidth:1,
        //borderColor:"#0B2447",
        height:65
    },
    iconText:{
        borderTopWidth:1,
        borderTopColor: "gray",
        textAlign:"center",
    }
})