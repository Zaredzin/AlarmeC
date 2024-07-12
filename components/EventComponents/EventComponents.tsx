import {Text, View, Pressable, StyleSheet,TouchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Stack } from 'expo-router';
import React from 'react';
import EventIcon from './EventIcon';

export  function EventView({time,description}){
    return(
        <View style={styles.eventContainer}>
            <Text style={styles.timeContainer}>{time}</Text>
            <View style={styles.alertMainContainer}>
                <View style={styles.line}/>
                <View style={styles.alertContainer}>
                    <Text style={styles.eventText}>{description}</Text>
                </View>
                <View style={styles.line}/>
            </View>
        </View>
    );
}
export function EventDay({day}){
    return(
        <TouchableOpacity style={styles.dayContainer}>
                  <Text style={styles.day}>{day}</Text>
                  <EventIcon icon="down" colorI="gray" size={16} />
        </TouchableOpacity>

    )
}  
export function EventMonth({month}){
    return(
        <TouchableOpacity>
            <Text style={styles.monthText}>{month}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create ({
    monthText:{
        fontSize: 26, textAlign:"center",fontWeight:"bold", color:"white"
    },
    eventContainer:{
        //borderWidth: 2,
        //borderColor: "blue",
        paddingHorizontal: 10,
        flexDirection: "row",
        
      },
      timeContainer:{
        //borderColor: "red",
        //borderWidth: 2,
        height:100,
        textShadowColor: "gray",
        textShadowOffset: {
          width: 1, height: 1
        },
        textShadowRadius: 3
  
  
      },
      alertMainContainer:{
        //borderColor: "black",
        //borderWidth: 1,
        flex:1,
        paddingHorizontal: 10,
      },
      eventText:{
        elevation:5,
        fontSize:16
      },
      alertContainer:{
        backgroundColor: "orange",
        padding: 8,
        borderRadius: 15,
        flex:1,
        elevation: 5,
      },
      line:{
        borderBottomColor: "gray",
        borderBottomWidth:1,
        marginVertical: 5,
        elevation: 2,
      },
      dayContainer:{
        flexDirection: "row",
        //borderColor:"red",
        //borderWidth: 2,
        textAlign:"left",
        width:"100%",
        
      },
      day:{
        color:"#fff",
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
        marginTop: 15,
        textAlign:"left",
  
        textShadowColor: "gray",
        textShadowOffset: {
          width: 1, height: 1
        },
        textShadowRadius: 3
      }
})