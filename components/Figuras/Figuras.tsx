import {Text, View, Pressable, StyleSheet} from 'react-native';
import React from 'react';



export  function Circle({style}){
    return(
        <View style={[styles.circle, style]}/>

        

    )
}




const styles = StyleSheet.create({
    circle: {
        borderRadius: 100 ,
        zIndex:0,
        position:"absolute",
        overflow:"hidden"
    },

    
        
        

})