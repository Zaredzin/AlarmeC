
import { Text,View,TextInput,StyleSheet, Pressable  } from "react-native";
import React, { useState } from "react";



export default function(){
        const [text, setText] = useState('');
        const [pass, setPass] = useState('');
    

    return(
        <View style={styles.loginContainer} >
            <View style={styles.image}><Text style={styles.imageText}>ImagenLogo</Text></View>
            <Text style={styles.title}>Iniciar Sesion</Text>
            <View style={styles.inputContainer}>
                <TextInput style={styles.inputText} placeholder="Usuario" onChangeText={setText} value={text}></TextInput>
                <TextInput style={styles.inputText} placeholder="Contraseña" onChangeText={setPass} value={pass}></TextInput>
            </View>
            <Pressable style={styles.noAccount}>
                <Text style={styles.noAccount} >¿No tienes cuenta?</Text>
            </Pressable>
        </View>
    )
}


const styles = StyleSheet.create({
    title:{
        fontSize: 30,
        fontWeight: "bold",
        justifyContent:'center',
        textAlign:'center',
    },
    loginContainer:{
        justifyContent:'center',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: 'blue',
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

    },
    noAccount:{
        marginTop: 50,
        color: 'blue',
        textAlign:'center',
    }
    
})