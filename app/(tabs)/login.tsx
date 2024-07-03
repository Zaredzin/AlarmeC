
import { Text,View,TextInput,StyleSheet, Pressable,Platform  } from "react-native";
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

                    <View style={styles.mainContainer} >
                        <View style={styles.image}><Text style={styles.imageText}>ImagenLogo</Text></View>
                        <Text style={styles.title}>Iniciar Sesion</Text>
                        <View style={styles.inputContainer}>
                            <TextInput style={styles.inputText} placeholder="Usuario" placeholderTextColor={"gray"} onChangeText={setText} value={text}></TextInput>
                            <TextInput style={styles.inputText} placeholder="Contraseña" placeholderTextColor={"gray"} onChangeText={setPass} value={pass}></TextInput>
                            <Pressable><Text style={styles.loginButton}>Iniciar</Text></Pressable>
                        </View>
                        <Pressable style={styles.noAccount}>
                            <Text style={styles.noAccount} >¿No tienes cuenta?</Text>
                        </Pressable>
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
        justifyContent: "center",
        backgroundColor: 'rgba(0,0,0,0.6)',

        width: "94%",
        height: "90%",

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
    image:{

        //borderWidth: 2,
        //borderColor: 'red',
        justifyContent:'center',
        textAlign:'center',
        marginBottom: 10,
        marginTop:10,
        height:100

    },
    imageText:{
        textAlign:'center',
        justifyContent:'center'
    },
    inputContainer:{
        marginTop: 60,

    },
    inputText:{
        borderColor: '#19376D',
        fontSize:20,
        borderRadius: 5,
        borderBottomWidth: 2,
        justifyContent:'center',
        textAlign:'center',
        marginHorizontal: 20,
        marginVertical: 10,
        paddingHorizontal: 80   ,
        paddingVertical: 4,
        backgroundColor: 'rgba(0,0,0,0.5)',
        color: "#fff"
        

    },
    noAccount:{
        marginTop: 50,
        color: '#fff',
        textAlign:'center',
        marginBottom:6,
    },
    loginButton:{
        textAlign: "center",
        justifyContent: "center",
        fontSize: 28,

        marginHorizontal: "auto",
        marginTop: 30,
        paddingVertical: 5,
        paddingHorizontal: 30,
        borderRadius: 5,
        backgroundColor: '#576CBC'
    },
    
})