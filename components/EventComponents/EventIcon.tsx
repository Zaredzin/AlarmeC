import {Text, View, Pressable, StyleSheet} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Stack } from 'expo-router';
import React from 'react';
import Entypo from '@expo/vector-icons/Entypo';

export default function EventIcon({icon, colorI, size}){
    return(
        <AntDesign style={styles.iconStyle} name={icon} size={size} color={colorI}/>
    )
}

const styles = StyleSheet.create({
    iconStyle:{
        marginHorizontal: 10,
        alignSelf:"center",
        marginVertical: "auto",
        
        
        
    }
})