
import { Text,View,TextInput,StyleSheet, Pressable,Platform,Image  } from "react-native";
import React, { useState } from "react";

import {LinearGradient} from 'expo-linear-gradient';
import { createStackNavigator } from "@react-navigation/stack";
import { Stack } from "expo-router";





export default function(){
        const [text, setText] = useState('');
        const [pass, setPass] = useState('');
    

    return(
        <View style={styles.loginContainer} >
            <Stack.Screen
                options={{ headerShown: false }}
            />        
            
            <LinearGradient 
                colors={['#0B2447', '#576CBC','#19376D', '#0B2447']} 
                start={{
                    x: 0,
                    y: 0
                }}
                end={{
                    x: 1,
                    y: 1
                }}
                style={styles.box}>

                    <View style={styles.mainContainer}>
                        <Image source={require('../../assets/images/react-logo.png')} style={styles.image}/>
                            <View>
                                <Text style={styles.signinText}>Sign in to your Alarme account</Text>
                            </View>
                    </View>    

                
            </LinearGradient>

    
            
        </View>
    )
}


const styles = StyleSheet.create({
    title:{
        fontSize: 30,
        fontWeight: "bold",
        justifyContent:'center',
        textAlign:'center',
        color: "#fff",

        
    },
    mainContainer:{
        justifyContent: "flex-start",
        backgroundColor: 'rgba(255,255,255, 0.9)',
        alignItems: 'center',
        width: "94%",
        height: "90%",
        paddingTop: 50,
        alignSelf:"center",
        borderStartColor: 'rgba(0,112,255,0.5)',
        borderTopColor: 'rgba(0,112,255,0.5)',
        borderEndColor: 'rgba(0,112,255,0.2)',
        borderBottomColor: 'rgba(0,112,255,0.3)',
        borderWidth: 2,
        borderRadius: 15,
        marginVertical: "auto",
        shadowColor: "black",
        shadowOffset: {
            width: 1,
            height: 5
        },
        shadowRadius: 10,
        shadowOpacity: 0.8,

        
    },
    box:{
        width: "100%",
        height: "100%"
    },
    loginContainer:{
        justifyContent:'center',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: 'blue',
        backgroundColor: "#0B2447",
        flex: 1,
    },
    signinText:{
        textAlign: "center",
        fontSize: 18,
        marginTop: 1
    },
    image: {
        width: 100, 
        height: 100, 
        marginBottom: 20
    }
    
})