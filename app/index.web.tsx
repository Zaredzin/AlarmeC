import { View, Text, ScrollView, StyleSheet, Image, useWindowDimensions, Pressable } from "react-native";
import React, { useEffect, useCallback, useState } from "react";
import Notifications from "../assets/SVG/Notifications.svg";
import Stress from "../assets/SVG/Stress.svg";
import Question from "../assets/SVG/Questioning.svg";
import Contact from "../assets/SVG/Contact.svg";
import { useFonts } from 'expo-font';
import { Circle } from "@/components/Figuras/Figuras";
import Back1 from "../assets/SVG/Back1";
import * as SplashScreen from 'expo-splash-screen';
import { Inter_600SemiBold } from "@expo-google-fonts/inter";
import { useRouter } from 'expo-router';
import { MotiView } from "moti";
import { Directions } from "react-native-gesture-handler";

export default function() {
    const router = useRouter();
    const [fontsLoaded] = useFonts({
        Inter_600SemiBold,
    });

    useEffect(() => {
        async function prepare() {
            await SplashScreen.preventAutoHideAsync();
        }
        prepare();
    }, []);

    const onLayout = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    const { width, height } = useWindowDimensions();
    const isSmallScreen = width < 600;
    if (!fontsLoaded) return null;

    const handleLoginPress = () => {
        router.push('/login'); // Navega a la pantalla de login
    };

    return (
        <View style={{ flex: 1 }} onLayout={onLayout}>
            <Image style={styles.backgroundImage} source={require("../assets/images/Imagenes/F1.jpg")} />
            <MotiView style={styles.header}>
                <MotiView style={styles.leftHeader}>
                    <Text style={styles.headerText}>AlarMe</Text>
                </MotiView>
                <MotiView style={styles.rightHeader}>
                    <Pressable onPress={handleLoginPress}>
                        <Text style={styles.headerText}>Log in</Text>
                    </Pressable>
                    <Text style={styles.headerText}>Sign in</Text>
                    <Text style={styles.headerText}>About</Text>
                </MotiView>
            </MotiView>
            <MotiView style={styles.mainContent}>
                <ScrollView>
                    <View>
                        <MotiView style={[styles.mainMessage]}>
                            <View style={[styles.conteiner111]}>
                            <Text style={[styles.largeText,{width: isSmallScreen ? width*0.8 : width*0.6}]}>Afraid of letting your home alone?</Text>
                                <Text style={[styles.mediumText,{width: isSmallScreen ? width*0.8 : width*0.6}]}>Protect your home and business from invisible air pollutants, fires, and gas leaks with AlarMe. Our cutting-edge solution combines IoT devices, a mobile app, and a web platform to provide real-time air quality monitoring and instant alerts. With AlarMe, you can breathe easy, knowing that your environment's air quality is constantly monitored and managed.</Text>
                            </View>
                            <Stress style={[styles.stressIcon,{width: isSmallScreen ? '100%' : width*0.3},]} />
                        </MotiView>
                        <MotiView style={styles.secondaryMessage}>
                            <View>
                                <View style={isSmallScreen ? styles.columnLayout : styles.rowLayout}>
                                    <Notifications style={{ width: isSmallScreen ? '100%' : 750 }} />
                                    <View>
                                        <Text style={[styles.mainText, {width: isSmallScreen ? width : width*0.6}]}>
                                            AlarMe <Text style={styles.highlightedText}>Key</Text> features
                                        </Text>
                                        <Text style={styles.medText}>Real-Time Monitoring</Text><Text style={[styles.smallText,{width: isSmallScreen ? width : width*0.6}]}>IoT devices equipped with MQ2, MQ135, and DHT11 sensors continuously track air quality, temperature, and potential gas leaks.</Text>
                                        <Text style={styles.medText}>Instant Alerts</Text><Text style={[styles.smallText,{width: isSmallScreen ? width : width*0.6}]}>Receive immediate notifications on your mobile app when air quality thresholds are exceeded or gas leaks are detected.</Text>
                                        <Text style={styles.medText}>Smart Control</Text><Text style={[styles.smallText,{width: isSmallScreen ? width : width*0.6}]}>Automatically open windows or take recommended actions to improve air quality and reduce risks.</Text>
                                        <Text style={styles.medText}>Historical Data</Text><Text style={[styles.smallText,{width: isSmallScreen ? width : width*0.6}]}>Access detailed air quality records and trends through our user-friendly web platform.</Text>
                                    </View>
                                </View>
                            </View>
                        </MotiView>

                        <MotiView style={styles.container3}>
                            <View>
                                <View style={isSmallScreen ? styles.columnLayout : styles.rowLayout}>
                                    <Text style={[styles.container3Text, {width: isSmallScreen ? width*0.9 : width*0.4  }]}>Why Choose AlarMe?</Text>
                                    <Question style={{ width: isSmallScreen ? '100%' : 750 }}/>
                                    <View>
                                        <Text style={[styles.container3Text2, {width: isSmallScreen ? width*0.9 : width*0.4  }]}>
                                        <Text style={styles.highlightedText}>AlarMe</Text>  is a service designed to monitor and protect the 
                                        integrity of your home in a simple and efficient way. 
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </MotiView>

                        <MotiView style={[styles.container3, {backgroundColor:"#00000000"}]}>
                            <View>
                                <View style={isSmallScreen ? styles.columnLayout : styles.rowLayout}>
                                    <Contact style={{ width: isSmallScreen ? '100%' : 600}}/>
                                    <View>
                                    <Text style={[styles.container3Text2, {width: isSmallScreen ? width*0.9 : width*0.4  }]}>
                                        <Text style={styles.highlightedText}>Join</Text> the AlarMe Family
                                        </Text>
                                        <Text style={[styles.smallText,{width: isSmallScreen ? width : width*0.6}]}>Don't wait until it's too late. Invest in the safety and well-being of your home and business with AlarMe. Experience the peace of mind that comes with knowing you're protected from invisible dangers.</Text>
                                        <Text style={[styles.smallText, {width: isSmallScreen ? width : width*0.6  }]}>
                                        <Text style={[styles.highlightedText,{fontSize: 38}]}>Order Now</Text> and take the first step towards a safer, healthier environment.
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </MotiView>
                    </View>
                </ScrollView>
            </MotiView>
        </View>
    );
}

const styles = StyleSheet.create({
    conteiner111:{
        //flexDirection: 'row',
        //borderWidth: 2,
        width: "60%",
        margin: 40
    },
    container3:{
        paddingHorizontal: 30,
        paddingVertical:45,
        backgroundColor: "#ffffff99",
        //flexDirection: "row"
    },
    container3Text:{
        textAlign: 'center',
        padding: 30,
        fontSize: 64,
        textShadowColor: '#000',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 5,
        fontFamily: 'Inter_600SemiBold',
        color: '#000',
    },
    container3Text2:{
        textAlign: 'center',
        padding: 30,
        fontSize: 32,
        textShadowColor: '#000',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 5,
        fontFamily: 'Inter_600SemiBold',
        color: '#fff',
    },
    backgroundImage: {
        flex: 1,
        position: "absolute",
        zIndex: -1,
    },
    header: {
        width: '100%',
        flexDirection: 'row',
    },
    leftHeader: {
        width: "50%",
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: "#000000",
    },
    rightHeader: {
        width: "50%",
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: "#000000",
        flexDirection: "row",
        justifyContent: "space-around",
    },
    headerText: {
        fontSize: 24,
        fontFamily: "Inter_600SemiBold",
        color: "#fff",
    },
    mainContent: {
        flex: 1,
        backgroundColor: "#00000099",
        width: '100%',
    },
    mainMessage: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        margin: 30,
        flexWrap: "wrap",
        flexBasis: "auto",
        flexDirection: "row",
        //borderWidth: 2,
    },
    largeText: {
        fontSize: 60,
        textShadowColor: "#000",
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 5,
        fontFamily: "Inter_600SemiBold",
        color: "#fff",
    },
    mediumText: {
        flex: 1,
        
        width: "100%",
        paddingVertical: 30,
        fontSize: 32,
        textShadowColor: "#000",
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 5,
        fontFamily: "Inter_600SemiBold",
        color: "#ffffff80",
        textAlign: "justify",
    },
    smallText: {
        flex: 1,
        marginLeft: 16,
        width: "100%",
        padding: 30,
        fontSize: 26,
        textShadowColor: "#000",
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 5,
        fontFamily: "Inter_600SemiBold",
        color: "#ffffff80",
        textAlign: "justify",
    },
    stressIcon: {
        width: "45%",
        //borderWidth: 2,
    },
    secondaryMessage: {
        marginTop: 50,
        paddingHorizontal: 30,
        paddingVertical:45,
        backgroundColor: "#00000090",
    },
    rowLayout: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    columnLayout: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    mainText: {
        textAlign: 'center',
        padding: 30,
        fontSize: 64,
        textShadowColor: '#000',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 5,
        fontFamily: 'Inter_600SemiBold',
        color: '#ffffff',
    },
    highlightedText: {
        textAlign: 'center',
        fontSize: 60,
        textShadowColor: '#000',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 5,
        fontFamily: 'Inter_600SemiBold',
        color: '#2ad',
    },
    subText: {
        textAlign: 'center',
        padding: 30,
        fontSize: 32,
        textShadowColor: '#000',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 5,
        fontFamily: 'Inter_600SemiBold',
        color: '#ffffff',
    },
    medText: {
        textAlign: 'center',
        fontSize: 38,
        textShadowColor: '#000',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 5,
        fontFamily: 'Inter_600SemiBold',
        color: '#2ad',
    },
});
