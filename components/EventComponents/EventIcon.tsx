import {Text, View, Pressable, StyleSheet} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Stack } from 'expo-router';
import React from 'react';
import Octicons from '@expo/vector-icons/Octicons';

export default function EventIcon({icon, colorI}){
    return(
        <AntDesign style={styles.iconStyle} name={icon} size={24} color={colorI}/>
    )
}

const styles = StyleSheet.create({
    iconStyle:{
        marginHorizontal: 10,
        
    }
})