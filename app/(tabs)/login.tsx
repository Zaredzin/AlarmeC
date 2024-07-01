
import { Text,View,TextInput,StyleSheet, Pressable  } from "react-native";
import React, { useState } from "react";
import {LinearGradient} from 'expo-linear-gradient';



export default function(){
        const [text, setText] = useState('');
        const [pass, setPass] = useState('');
    

    return(
        <View style={styles.loginContainer} >
            <LinearGradient 
                colors={['#0B2447', '#576CBC']} 
                start={{
                    x: 0.10,
                    y: 0.10
                }}
                end={{
                    x: 1,
                    y: 1
                }}
                style={styles.box}>

                <View style={styles.image}><Text style={styles.imageText}>ImagenLogo</Text></View>
                    <Text style={styles.title}>Iniciar Sesion</Text>
                    <View style={styles.inputContainer}>
                        <TextInput style={styles.inputText} placeholder="Usuario" onChangeText={setText} value={text}></TextInput>
                        <TextInput style={styles.inputText} placeholder="Contraseña" onChangeText={setPass} value={pass}></TextInput>
                        <Pressable><Text style={styles.loginButton}>Iniciar</Text></Pressable>
                    </View>
                    <Pressable style={styles.noAccount}>
                        <Text style={styles.noAccount} >¿No tienes cuenta?</Text>
                    </Pressable>
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
        color: "white",
        
    },
    box: {
        width: '100%',
        height: '100%',
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

        borderWidth: 2,
        borderColor: 'red',
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
        borderColor: 'black',
        fontSize:20,
        borderWidth: 2,
        borderRadius: 8,
        justifyContent:'center',
        textAlign:'center',
        marginHorizontal: 20,
        marginVertical: 10,
        backgroundColor: "#576CBC"

    },
    noAccount:{
        marginTop: 50,
        color: 'blue',
        textAlign:'center',
    },
    loginButton:{
        textAlign: "center",
        justifyContent: "center",
        fontSize: 28,
        borderWidth: 2,
        marginHorizontal: "auto",
        marginTop: 20,
        paddingVertical: 5,
        paddingHorizontal: 15,
        borderRadius: 5,
        backgroundColor: "#576CBC"
    },
    
})