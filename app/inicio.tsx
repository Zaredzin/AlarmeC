import { View,Text,ScrollView,StyleSheet,TouchableHighlight,Pressable, useWindowDimensions, Image} from "react-native";
import React, { useEffect, useCallback, useState } from "react";
import { Circle } from "@/components/Figuras/Figuras";
import Back1 from "../assets/SVG/Back1";
import {useFonts} from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {Inter_600SemiBold} from "@expo-google-fonts/inter";
import EventIcon from "@/components/EventComponents/EventIcon";
import Box from "@/components/Main_Web/Box";
import { useRouter } from 'expo-router';
import { Stack } from "expo-router";
import { MotiView } from "moti";
import Animated, { useSharedValue, useAnimatedStyle, withTiming, Easing } from 'react-native-reanimated';






export default function(){
    const router = useRouter();

    const [fontsLoaded] = useFonts({
        SpaceMono: require("../assets/fonts/SpaceMono.ttf"),
        Inter_600SemiBold,
    });
    
    useEffect(() => {
        async function prepare() {
             SplashScreen.preventAutoHideAsync
            
        }
        prepare();
    }, [])

   
    

    const onLayout = useCallback(async() => {
        if(fontsLoaded){
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded])

    if (!fontsLoaded) return null;

    const { width, height } = useWindowDimensions();

    //Indice para las tarjetas
    const [currentBox, setCurrentBox] = useState(0);
    const [direction, setDirection] = useState('next');

    const nextBox = () => {
        setCurrentBox((prevIndex) => (prevIndex + 1) % boxes.length);
        setDirection('next');
        
      }
      const previousBox = () => {
        setCurrentBox((prevIndex) => (prevIndex - 1 + boxes.length) % boxes.length);
        setDirection('prev');
      }
     

    const boxes = [
        //PRIMERA BOX
        <Box key="0" index={0} currentIndex={currentBox} direction={direction}>

            <View style={{padding:"1%", width:"50%", alignSelf:"center",alignItems:"center", justifyContent:"space-around", }}>
                <Text style={{ justifyContent:"center" ,fontSize: ((height * 0.06)), fontFamily:"Inter_600SemiBold"}}>Afraid of letting alone your house?</Text>
            </View>
            <View style={{padding:"1%", width:"50%", alignSelf:"center",alignItems:"center", justifyContent:"space-around", }}>
                <Text style={{ justifyContent:"center" ,fontSize: ((height * 0.03)), fontFamily:"Inter_600SemiBold"}}>Alarme will be your companion</Text>
            </View>
            

        </Box>,
        //SEGUNDA BOX
        <Box key="1" index={1} currentIndex={currentBox} direction={direction}>
                <Text>aaaaaaaa</Text>

                
        </Box>,
        
      ];
    
      


    //const [backgroundColor, setBackgroundColor] = useState("#00000000");
     const [isHoveredArrowL, setIsHoveredArrowL] = useState(false);
     const [isHoveredArrowR, setIsHoveredArrowR] = useState(false);

   

    



     const amonos = () => {
        router.push('');
      };

    return(
        <View style={{flex:1}} onLayout={onLayout}>
            <View style={{position: 'absolute', zIndex:-1, width:width, height:height}}>
                
                <View style={{backgroundColor:'#121532', width:"100%", height:"34%", zIndex:-1,}}>
                    <Circle style={{width:180, height:180, backgroundColor:"#00000030", marginLeft:width * 0.7, marginTop:height * 0.01, }} />
                </View>
                <Back1   zindex={0} position={"absolute"} width={width} height={height} ></Back1>
                
                
                



            </View>
            
            

            <ScrollView style={{ flex: 1,  zIndex:1, }}>
                <MotiView from={{ translateY: "-30%"}} animate={{translateY: 0}} transition={{type: 'spring',duration: 3000,
          }}
                 style={{ flexDirection:"row",height: height * 0.1, justifyContent:"space-around", padding:20, marginHorizontal:width * 0.06,marginTop:height * 0.03, }}>
                    <View >
                        <Text style={{fontFamily:"Inter_600SemiBold",width:width * 0.15, fontSize: ((height * 0.03)), color:"#fff", }}>Alarmamela</Text>
                    </View>
                    <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                        <Pressable onPress={amonos}>
                            <Text style={{fontFamily:"Inter_600SemiBold",fontSize: ((height * 0.03)), color:"#fff", marginHorizontal:width * 0.01}}>Log in</Text>
                        </Pressable>
                        
                        <Text style={{fontFamily:"Inter_600SemiBold",fontSize: ((height * 0.03)), color:"#fff", marginHorizontal:width * 0.01}}>Register</Text>
                    </View> 
                </MotiView>
                <View style={{width: width * 0.8, height: height * 0.7, marginTop: height * 0.2,position:"absolute", zIndex: 1,flexDirection:"row", borderRadius:15, backgroundColor: "#00000000", alignSelf:"center", }}>
                    <Pressable onPress={previousBox}   onHoverIn={() => setIsHoveredArrowL(true) } onHoverOut={() => setIsHoveredArrowL(false)}  style={({ pressed }) => [{backgroundColor: pressed ? 'blue' : isHoveredArrowL ? '#ffffff40' : '#00000000',},styles.arrowButtonL,]} >
                        <EventIcon icon={"caretleft"} size={28} colorI={"white"}/>
                        
                    </Pressable>
                    <Pressable onPress={nextBox} onHoverIn={() => setIsHoveredArrowR(true) } onHoverOut={() => setIsHoveredArrowR(false)}  style={({ pressed }) => [{backgroundColor: pressed ? 'blue' : isHoveredArrowR ? '#ffffff40' : '#00000000',},styles.arrowButtonR,]} >
                    <EventIcon icon={"caretright"} size={28} colorI={"white"}/>
                        
                </Pressable>

                </View>
                
                {boxes.map((box, index) => (
                    <Box key={index} index={index} currentIndex={currentBox} direction={direction}>
                    {box.props.children}
                    </Box>
                ))}

                

            </ScrollView>
            
        </View>
    )
}

const styles = StyleSheet.create({
    arrowButtonR:{
        borderRadius:25, position:"absolute", alignSelf:"center", right:"-7%",

    },
    arrowButtonL:{
        borderRadius:25, position:"absolute", alignSelf:"center", left:"-7%", 

    }
})