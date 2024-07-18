
import { MotiView } from 'moti';
import React, { useEffect } from 'react';
import { View, useWindowDimensions, StyleSheet } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, Easing } from 'react-native-reanimated';





export default function Box({ children, currentIndex, index, direction }) {
    const { width, height } = useWindowDimensions();
    return (
        <MotiView
          from={{
            translateX: direction === 'next' ? width : -width,
          }}
          animate={{
            translateX: currentIndex === index ? 0 : direction === 'next' ? -width : width,
          }}
          transition={{
            type: 'spring',
            duration: 3000,
          }}
          style={[styles.card, { width: width * 0.8, height: height * 0.7, marginTop: height * 0.2, position:"absolute" }]}
        >
          {children}
        </MotiView>
      );
    }
    

        

  

  

 


const styles = StyleSheet.create({
    
  card: {
    flexDirection:"row", borderRadius:15, backgroundColor: "#efefef", alignSelf:"center", shadowRadius:20, shadowOffset:{width:0,height:0},
  }
});
