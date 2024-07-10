import { Text, View, TextInput,Button, StyleSheet, Pressable,ScrollView, Platform, Image, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { LinearGradient } from 'expo-linear-gradient';
import * as SplashScreen from 'expo-splash-screen';
import { useRouter } from 'expo-router';
import { Stack } from "expo-router";
import {BlurView} from 'expo-blur'
import EventIcon from "@/components/EventComponents/EventIcon";
import {useFonts} from 'expo-font';
import * as Font from 'expo-font';




export default function LoginScreen() {
    const [text, setText] = useState('');
    const [pass, setPass] = useState('');
    const router = useRouter();

    const handleLogin = () => {
        if (text === 'hola' && pass === 'hola') {
            router.push('/(tabs)/home');
        } else {
            alert('Credenciales incorrectas');
        }
    };


    SplashScreen.preventAutoHideAsync();


    const [fontsLoaded] = useFonts({
        'Outfit': require('../assets/fonts/Outfit-Medium.ttf')
    });
    
    useEffect(() => {
        async function prepare() {
            await SplashScreen.preventAutoHideAsync	();
            
        }
        prepare();
    }, [])

    if (!fontsLoaded){
        return undefined;
    } else {
        SplashScreen.hideAsync();
    }
    


    



    
    return (
        <View style={styles.loginContainer}>
            <Stack.Screen
                options={{ headerShown: false }}
            />
            
            <LinearGradient
                colors={['#121532', '#203457', '#6c8294', '#506275', '#3483b0']}
                start={{
                    x: 0,
                    y: 0
                }}
                end={{
                    x: 1,
                    y: 1
                }}
                style={styles.box}>
                <View style={{width:100,height:100, backgroundColor: "#264a71", position: "absolute",}}></View>
                <ScrollView contentContainerStyle={{flex:1, width:"100%",height:"100%", }}>
                    
                    <View style={styles.labelT}>
                        <Text style={styles.title}>Iniciar Sesion</Text>
                    </View>         
                    
                    
                    <BlurView experimentalBlurMethod="dimezisBlurView" intensity={60} style={styles.blurContainer} >

                        <View style={styles.mainContainer}>
                            <View style={styles.inputContainer}>
                                <TextInput style={styles.inputText} placeholder="Usuario"  onChangeText={setText} value={text}></TextInput>
                                <TextInput style={styles.inputText} placeholder="Contraseña"  onChangeText={setPass} value={pass} secureTextEntry></TextInput>
                                <TouchableOpacity onPress={handleLogin}><Text style={styles.loginButton}>Iniciar<EventIcon  colorI={"#fff"} icon="arrowright" size={24}></EventIcon></Text>
                                    
                                </TouchableOpacity>
                            </View>
                            <Pressable style={styles.noAccount}>
                                <Text style={styles.noAccount}>I don't know my password</Text>
                            </Pressable>
                        </View>

                    </BlurView>
                </ScrollView>

                
            </LinearGradient>
            
        </View>
    )
}

const styles = StyleSheet.create({
    blurContainer:{
        borderRadius: 15,
        overflow:'hidden',
        width: 300,
        height:400,
    },
    title: {
        fontSize: 38,
        fontWeight: "bold",
        
        textAlign: 'left',
        color: "white",
        fontFamily:'Outfit'
        
        
    },
    mainContainer: {
        justifyContent: "center",
       // backgroundColor: '#f5f7fa',
       width:"100%",
       height:"100%",

       
        alignSelf: "center",
        
        borderRadius: 15,
        borderWidth:2,
        borderColor: "#fff",
       // borderTopStartRadius: 12,
        //borderTopEndRadius: 12,
        shadowColor: "black",
        shadowOffset: {
            width: 1,
            height: 5
        },
        shadowRadius: 10,
        shadowOpacity: 0.8,
    },
    box: {
        width: "100%",
        height: "100%",
        flex:1,
        justifyContent:"center",
        alignItems:"center",

    },
    loginContainer: {
        justifyContent: 'center',
        textAlign: 'center',
        alignItems:"center",
        flex:1,
        
       // backgroundColor: "#0B2447",
        //flex: 1,
    },
    labelT: {
        marginTop:85,
        marginBottom:40,
        textAlign:"left",
        


    },
    
    inputContainer: {
        alignItems:"center"
    },
    inputText: {
        justifyContent:"center",
        width:250,
        height:40,
        borderColor:"#fff",
        borderWidth:2,
        borderRadius:10,
        padding:10,
        marginVertical:10,
        backgroundColor:"#ffffff50",
        marginBottom:20,
    },
    noAccount: {
        marginTop: 50,
        color: '#fff',
        textAlign: 'center',
        marginBottom: 6,
    },
    loginButton: {
        width:250,
        height:40,
        borderRadius:10,
        backgroundColor: "#82d8e980",
        alignItems:"center",
        justifyContent:"center",
        textAlign:"center",
        alignSelf:"center",
        fontSize:28,
        marginVertical:10,
        borderWidth:1,
        borderColor:"#fff",
        color:"#fff",
        fontWeight:"500",

    },
});
