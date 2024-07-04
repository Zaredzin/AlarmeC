import {Text, View, Pressable, StyleSheet} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Stack } from 'expo-router';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function TriggerIcon({icon, colorI, size}){
    return(
        <MaterialCommunityIcons style={styles.iconStyle} name={icon} size={size} color={colorI}/>
    )
}

const styles = StyleSheet.create({
    iconStyle:{

        alignSelf:"center",
        

        
    }
})