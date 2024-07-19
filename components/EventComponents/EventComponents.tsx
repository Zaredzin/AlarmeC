import {Text, View, Pressable, StyleSheet,TouchableOpacity, ScrollView} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Stack } from 'expo-router';
import React from 'react';
import EventIcon from './EventIcon';
import { BlurView } from 'expo-blur';
import { Inter_600SemiBold } from '@expo-google-fonts/inter';
import IndexIcon from './IndexIcon';
import { IconEntypo } from './IndexIconEntypo';
import { MaterialI } from './IndexIconEntypo';
import Entypo from '@expo/vector-icons/Entypo';
import { MotiView } from 'moti';


const TemperatureIcon = () => {
  return (
    <IndexIcon icon={"temperature-empty"} colorI={"#00ff00"} size={24}/>
  );
};

const OxygenIcon = () => {
  return (
    <IconEntypo icon={"air"} colorI={"gray"} size={24} />
  ); 
};

const WaterIcon = () => {
  return (
    <IconEntypo icon={"water"} colorI={"#2ad"} size={24}/>
  );  
};

const GasIcon = () => {
  return (
    <MaterialI icon={"gas-meter"} colorI={"orange"} size={24}/>
  );  
};

const NoIcon = () => {
  return (
    <Entypo name="help-with-circle" size={24} color="#fff" style={{marginHorizontal: 5,
      justifyContent:"flex-start",
      marginVertical: "auto",}} />
  );  
};

const iconComponents = {
  'temp': TemperatureIcon,
  'air': OxygenIcon,
  'water': WaterIcon,
   'gas': GasIcon,
    null: NoIcon,
    undefined: NoIcon
  
};


export  function EventView({time,description, style, fontSize, icon}){

  const IconComponent = iconComponents[icon];




    return(

      <View style={styles.alertMainContainer}>

        <View style={[styles.alertContainer, style, {flexDirection:"row",}]}>    
            <View style={{width:"12%"}}>
              <IconComponent/>
            </View>
           
            <View style={{ marginHorizontal:4, width:"85%", }}>
                <Text style={[styles.eventText, fontSize, {}]}>{description}</Text>
                <Text style={[styles.timeContainer,{}]}>{time}</Text>
            </View>
                    
                </View>
        </View>

    );
}
export function EventDay({day}){
    return(
        <TouchableOpacity style={styles.dayContainer}>
                  <Text style={styles.day}>{day}</Text>
                  
        </TouchableOpacity>

    )
}  
export function EventMonth({month}){
    return(
        <TouchableOpacity style={{flexDirection:"row",}}>
            <Text style={styles.monthText}>{month}</Text>
            <EventIcon icon="down" colorI="gray" size={30} />
        </TouchableOpacity>
    )
}

export function DateMenu({dates, handleDatePress}){
  return(
      <MotiView from={{translateY:2, height:0}} animate={{ translateY:32, height:200}} transition={{type:"timing", duration:500}} style={{elevation: 10,zIndex:1, backgroundColor:"#164b6a",width:"85%", height:200, position:"absolute", borderBottomLeftRadius:15, borderBottomRightRadius:15,paddingBottom:12 }}>
          <ScrollView style={{paddingBottom:10}}>

              {dates.map((date, index) => (
                  <TouchableOpacity onPress={() => handleDatePress(date)} key={index} style={{overflow:"hidden", elevation:5, paddingHorizontal: 5, height:40, width:"100%", borderRadius:15, backgroundColor:"#fff", marginVertical:4}}>
                      <Text style={{color:"#000", fontFamily:"Inter_600SemiBold", fontSize:28}}>{date}</Text>
                     
                  </TouchableOpacity>
              ))}
               
          </ScrollView>
      </MotiView>
  )
}













const styles = StyleSheet.create ({
    monthText:{
        fontSize: 26, fontFamily:"Inter_600SemiBold", textAlign:"center", color:"white"
    },
    eventContainer:{
        //borderWidth: 2,
        //borderColor: "blue",
        paddingHorizontal: 10,
        flexDirection: "row",
        height:100,
        alignSelf:"center"
        
        
      },
      timeContainer:{
        //borderColor: "red",
        //borderWidth: 2,
        textAlign:"right",
        color:"#000",
        fontWeight:"500",
        fontSize:14,
        
        fontFamily:"Inter_600SemiBold",
        paddingHorizontal:4
       
  
  
      },
      alertMainContainer:{
        //borderColor: "black",
        //borderWidth: 1,
        flex:1,
        paddingHorizontal: 10,
        
      
      },
      eventText:{
        //elevation:5,
        fontSize:14,
        color:"#fff",
        fontWeight:"400",
        textAlign:"center",
        fontFamily:"Inter_600SemiBold",
        flex:1,
        paddingHorizontal:4
      },
      alertContainer:{
        alignSelf:"center",
        width:300,
        backgroundColor:  "#172144",
        padding: 8,
        flex:1,
        elevation: 5,
        //borderWidth: 1,
        borderRadius: 12,
        //borderColor: '#2ad',
        overflow:"hidden",
        height:90,
        marginVertical:4,
        shadowColor:"#000",
        shadowOffset: {width:1, height:0},
        shadowRadius:5,
        
        
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
        marginRight:5,
  
        textShadowColor: "gray",
        textShadowOffset: {
          width: 1, height: 1
        },
        textShadowRadius: 3
      }
})