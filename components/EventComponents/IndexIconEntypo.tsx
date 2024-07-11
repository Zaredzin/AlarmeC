import {Text, View, Pressable, StyleSheet} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Stack } from 'expo-router';
import React from 'react';
import Entypo from '@expo/vector-icons/Entypo';
import { FontAwesome6 } from '@expo/vector-icons';

export default function IndexIconEntypo({icon, colorI, size, style}){
    return(


        
        <Entypo style={[styles.iconStyle, {style}]} name={icon} size={size} color={colorI}/>

    )
}



const styles = StyleSheet.create({
    iconStyle:{
        
        justifyContent:"flex-start",
        marginVertical: "auto",
        
        
        
        
    },
    
})