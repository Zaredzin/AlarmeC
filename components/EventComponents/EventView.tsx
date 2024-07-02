import {Text, View, Pressable, StyleSheet} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Stack } from 'expo-router';
import React from 'react';

export default function EventView({children}){
    return(
        <View style={styles.eventContainer}>
            {children}
        </View>
    );
}

const styles = StyleSheet.create ({
    eventContainer:{

        justifyContent: "center",
        borderWidth: 2,
        borderColor: "black",
        marginHorizontal: "auto",
        paddingHorizontal: 20,
        paddingVertical:20,
        marginVertical: 5,
        
    }
})