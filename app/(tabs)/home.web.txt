import React from 'react';
import { Text, View, Pressable, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity, useWindowDimensions } from 'react-native';
import { AntDesign, FontAwesome6 } from '@expo/vector-icons';
import { Stack } from 'expo-router';
import EventIcon from '@/components/EventComponents/EventIcon';
import TriggerIcon from '@/components/indexComponents/TriggerIcon';
import { LinearGradient } from 'expo-linear-gradient';
import IndexIcon from "@/components/EventComponents/IndexIcon";
import { IconEntypo } from '@/components/EventComponents/IndexIconEntypo';
import { StatusBar } from 'expo-status-bar';
import { BlurView } from 'expo-blur';
import  HomeComponents, { HomeTriggerView, HumiditySensor, OxygenSensor, TempSensor }  from '../../components/HomeComponents/HomeComponents';
import { MaterialI } from '@/components/EventComponents/IndexIconEntypo';
import { GasConcentration } from '../../components/HomeComponents/HomeComponents';

export default function App() {
    const { width, height } = useWindowDimensions();

    return (
        <LinearGradient
            style={styles.mainContainer}
            colors={['#0B2447', '#576CBC', '#19376D', '#0B2447']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
        >
            <StatusBar style="light" backgroundColor="#121532" />
            
            <Stack.Screen options={{ headerShown: false }} />
            
            <BlurView style={styles.container1}>
                <Text style={styles.Title}>No se han registrado eventos</Text>
            </BlurView>
            
            <View style={[styles.containerContainer, ]}>
                <TouchableOpacity  style={[styles.roomButton, { flexDirection: "row" }]}>
                    <Text style={styles.roomButtonText}> Habitación</Text> 
                    <EventIcon icon="down" colorI="#fff" size={20} />
                </TouchableOpacity>

                <View style={{flexDirection:"row"}}>
                
                    <View style={[styles.container2,{width:width * 0.01, height: height * 0.6} ]}>
                        
                            <View style={[styles.SensorsContainer, {flexDirection:"row",  justifyContent: "space-between" }]}>
                                <IndexIcon icon={"temperature-empty"} colorI={"#000"} size={26} />
                                <TempSensor temp={"27°"} />
                            </View>
                            <View style={[styles.SensorsContainer, {flexDirection:"row",  justifyContent: "space-between" }]}>
                                <IconEntypo icon={"air"} colorI={"gray"} size={26} />
                                <OxygenSensor oxygenLevel={"71%"} />
                            </View>
     
                    
                        
                            <View style={[styles.SensorsContainer, {flexDirection:"row",  justifyContent: "space-between" }]}>
                                <IconEntypo icon={"water"} colorI={"#2ad"} size={26} />
                                <HumiditySensor humidityLevel="65%" />
                            </View>
                            <View style={[styles.SensorsContainer, { flexDirection:"row", justifyContent: "space-between" }]}>
                                <MaterialI icon={"gas-meter"} colorI={"orange"} size={28} />
                                <GasConcentration gasLevel="65%" />
                            </View>
                        
                    </View>
                
                    <ScrollView style={[styles.container3, {width: width * 0.5, height: height * 0.6}]}>
         
                            <HomeTriggerView style={{width:width * 0.45, height: 80}}  triggerName={"Puerta Este"} action={"close"} />
                            <HomeTriggerView style={{width:width * 0.45, height: 80}}  triggerName={"Puerta Este"} action={"close"} />
                            <HomeTriggerView style={{width:width * 0.45, height: 80}}  triggerName={"Puerta Este"} action={"close"} />
                            <HomeTriggerView style={{width:width * 0.45, height: 80}}  triggerName={"Puerta Este"} action={"close"} />
                            <HomeTriggerView style={{width:width * 0.45, height: 80}}  triggerName={"Puerta Este"} action={"close"} />
                            <HomeTriggerView style={{width:width * 0.45, height: 80}}  triggerName={"Puerta Este"} action={"close"} />
                            <HomeTriggerView style={{width:width * 0.45, height: 80}}  triggerName={"Puerta Este"} action={"close"} />
                            <HomeTriggerView style={{width:width * 0.45, height: 80}}  triggerName={"Puerta Este"} action={"close"} />
                            <HomeTriggerView style={{width:width * 0.45, height: 80}}  triggerName={"Puerta Este"} action={"close"} />
                            <HomeTriggerView style={{width:width * 0.45, height: 80}}  triggerName={"Puerta Este"} action={"close"} />
    
                    </ScrollView>
                </View>    
            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    line: {
        alignSelf: "center",
        width: "95%",
        borderBottomColor: "gray",
        borderBottomWidth: 1,
        marginVertical: 5,
        elevation: 2,
    },
    Title: {
        fontSize: 20,
        color: 'white',
        textShadowColor: 'rgba(0,0,0,0.2)',
    },
    box: {
        width: "100%",
        height: "100%"
    },
    mainContainer: {
        marginVertical: 0,
        marginHorizontal: 0,
        flex: 1,
        backgroundColor: "#d7dbdd",
        zIndex: 3
    },
    container1: {
        marginTop: 8,
        marginHorizontal: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 15,
        borderRadius: 15,
        overflow: "hidden",
        height: 60
    },
    container2: {
        
        flexDirection: 'column',
        justifyContent:"space-around",
        
        alignItems: "center",
        
        marginHorizontal: 8,
        marginRight:60,
        //height: 160,
        borderRadius: 15,
        flex:1
    },
    SensorsContainer: {
        width:100,
        margin: 5,
        padding: 10,
        justifyContent: 'center',
        height: 65,
        borderRadius: 12,
        backgroundColor: "white",
        elevation: 5,
        shadowColor:"#000",
        shadowOffset: {width:1, height:0},
        shadowRadius:5,
    },
    sensorsText: {
        fontSize: 14,
        textShadowColor: 'rgba(0,0,0,0.2)',
        textShadowRadius: 3,
        textShadowOffset: {
            width: 2, height: 1,
        }
    },
    container3: {
        marginTop: 8,
        //width: 300,
       // justifyContent: 'center',
        backgroundColor: "#d7dbdd",
        
        marginHorizontal: 8,
        //alignItems: "center",
        //height: 340,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderBottomLeftRadius: 3,
        borderBottomRightRadius: 3,
        overflow: "hidden",
        alignContent:"center",
        alignSelf:"center",
        marginBottom:110
        
    },
    containerContainer: {
        alignSelf: "center",
        marginHorizontal: 8,
        marginTop: 8,
        width: "95%",
        height: "89%",
        backgroundColor: "#f5f7fa",
        paddingBottom: 6,
        elevation: 5,
        alignItems: "center",
        borderRadius: 15,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        
    },
    roomButton: {
        width: "100%",
        backgroundColor: "#0B2447",
        justifyContent: 'center',
        textAlign: 'center',
        paddingVertical: 2,
        borderRadius: 12,
        borderBottomStartRadius: 0,
        borderBottomEndRadius: 0,
        elevation: 5,
        marginBottom:5
    },
    roomButtonText: {
        fontSize: 24,
        color: "white",
        textAlign: 'center',
    },
});
