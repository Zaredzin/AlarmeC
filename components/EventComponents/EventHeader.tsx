import {Text, View, Pressable, StyleSheet} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Stack } from 'expo-router';
import React from 'react';

export default function EventHeader({children}){
    return(
        <Text style={[styles.eventText]}>
            {children}
        </Text>
    );
}

const styles = StyleSheet.create ({
    eventText:{

        justifyContent: "center",
        textAlign: "center",
        fontSize: 24,
        marginHorizontal: "auto",
        marginVertical: 5,
        
    }
})