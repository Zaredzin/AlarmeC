import {Text, View, Pressable, StyleSheet,TouchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Stack } from 'expo-router';
import React from 'react';
import EventIcon from './EventIcon';
import { BlurView } from 'expo-blur';

export  function EventView({time,description}){
    return(
        <View style={styles.eventContainer}>
            
            <View style={styles.alertMainContainer}>
                <View style={styles.alertContainer}>
                    <Text style={styles.eventText}>{description}</Text>
                    <Text style={styles.timeContainer}>{time}</Text>
                </View>
      
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
        height:90,
        
        
      },
      timeContainer:{
        //borderColor: "red",
        //borderWidth: 2,
        textAlign:"right",
        color:"#000",
        fontWeight:"500",
        height:100,
       
  
  
      },
      alertMainContainer:{
        //borderColor: "black",
        //borderWidth: 1,
        flex:1,
        paddingHorizontal: 10,
        backgroundColor:"#00000010",
      
      },
      eventText:{
        elevation:5,
        fontSize:16,
        color:"#fff",
        fontWeight:"400"
      },
      alertContainer:{
        alignSelf:"center",
        width:280,
        backgroundColor: "#00447c",
        padding: 8,
        flex:1,
        elevation: 5,
        //borderWidth: 1,
        borderRadius: 12,
        //borderColor: '#2ad',
        overflow:"hidden",
        height:80,
        marginVertical:4,
        
        
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
        color:"#00",
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