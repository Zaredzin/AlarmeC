import {Text, View, Pressable, StyleSheet, TouchableOpacity, useWindowDimensions, Platform} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Stack } from 'expo-router';
import React, { useState, useEffect } from 'react';
import TriggerIcon from '../indexComponents/TriggerIcon';
import { Inter_600SemiBold } from "@expo-google-fonts/inter";
import { MotiView, ScrollView } from 'moti'; 
import { database } from '../../app/fireBase'; 
import { ref, set } from 'firebase/database';

export function HomeTriggerView({ triggerName, action }) {
    const [isOpen, setIsOpen] = useState(action); // Estado para controlar si el botón está abierto o cerrado

    // Alternar abierto y cerrado
    const toggleAction = () => {
        const newActionState = !isOpen;
        setIsOpen(newActionState);

        // Actualizar el estado en Firebase
        const path = `Accesos/${triggerName}`;
        const actionValue = newActionState ? 0 : 1; // 0 para desbloqueado, 1 para bloqueado
        const triggerRef = ref(database, path);
        set(triggerRef, actionValue)
            .then(() => {
                console.log(`Estado de ${triggerName} actualizado a ${actionValue}`);
            })
            .catch((error) => {
                console.error('Error al actualizar el estado en Firebase:', error);
            });
    };

    // Dimensiones de la pantalla
    const { width, height } = useWindowDimensions();

    // Variables para el icono y el color de fondo dependiendo del estado
    let icon = isOpen ? 'door-open' : 'door-closed';
    let backgroundColor = isOpen ? '#2ad' : '#ff0000';
    let buttonText = isOpen ? 'open' : 'close';

    return (
        <View style={Platform.OS === 'web' ? styles.triggerContainerWeb : styles.triggerContainer}>
            <Text style={styles.triggerContainerText}>{triggerName}</Text>
            <Pressable
                style={[styles.triggerButton, { backgroundColor }]}
                onPress={toggleAction} // Cambiar el estado al presionar el botón
            >
                <TriggerIcon icon={icon} size={34} colorI={'#fff'} />
                <Text style={styles.iconText}>{buttonText}</Text>
            </Pressable>
        </View>
    );
}

export function RoomMenu({ rooms, handleRoomPress }) {
    return (
        <MotiView from={{ translateY: 2, height: 0 }} animate={{ translateY: 32, height: 200 }} transition={{ type: "timing", duration: 500 }} style={{ elevation: 10, zIndex: 1, backgroundColor: "#164b6a", width: "85%", height: 200, position: "absolute", borderBottomLeftRadius: 15, borderBottomRightRadius: 15, paddingBottom: 12 }}>
            <ScrollView style={{ paddingBottom: 10 }}>
                {rooms.map((room, index) => (
                    <TouchableOpacity onPress={() => handleRoomPress(room)} key={index} style={{ overflow: "hidden", elevation: 5, paddingHorizontal: 5, height: 40, width: "100%", borderRadius: 15, backgroundColor: "#fff", marginVertical: 4 }}>
                        <Text style={{ color: "#000", fontFamily: "Inter_600SemiBold", fontSize: 24 }}>{room}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </MotiView>
    );
}

export function TempSensor({temp}){

    return(
        <Text style={{color:"#fff",alignSelf:"center", fontFamily:"Inter_600SemiBold", fontSize:20, justifyContent:"space-between"}}>{temp}</Text>
    )

        
}
export function OxygenSensor({oxygenLevel}){
    return(
        <Text style={{color:"#fff",alignSelf:"center",fontFamily:"Inter_600SemiBold", fontSize:20, justifyContent:"space-between"}}>{oxygenLevel}</Text>
    )
}
export function HumiditySensor({humidityLevel}){
    return(
        <Text style={{color:"#fff",alignSelf:"center",fontFamily:"Inter_600SemiBold", fontSize:20, justifyContent:"space-between"}}>{humidityLevel}</Text>
    )
}
export function GasConcentration({gasLevel}){
    return(
        <Text style={{color:"#fff",alignSelf:"center",fontFamily:"Inter_600SemiBold", fontSize:20, justifyContent:"space-between"}}>{gasLevel}</Text>
    )
}

const styles = StyleSheet.create({
    triggerContainer:{
        //height:80,
        alignSelf:"center",
        width:280,
        justifyContent:'center',
        flexDirection: "row",
        overflow:"hidden",
        marginVertical: 3,
        paddingVertical: 15,
        borderRadius: 12,
        marginHorizontal:8,
        textAlign: 'center',
        backgroundColor:  "#172144",
        alignItems:"center",
        alignContent:"center",
        shadowColor:"#000",
        shadowOffset: {width:1, height:0},
        shadowRadius:5,
        elevation:5,
    },
    triggerContainerWeb:{
        //height:80,
        alignSelf:"center",
        width:"90%",
        justifyContent:'center',
        flexDirection: "row",
        overflow:"hidden",
        marginVertical: 3,
        paddingVertical: 15,
        borderRadius: 12,
        marginHorizontal:8,
        textAlign: 'center',
        backgroundColor:  "#172144",
        alignItems:"center",
        alignContent:"center",
        shadowColor:"#000",
        shadowOffset: {width:1, height:0},
        shadowRadius:5,
        elevation:5,
    },
    triggerContainerText:{
        fontSize:22,
        color: "#f5f7fa",
        fontWeight: "400",
        justifyContent:'center',
        textAlign: 'center',
        alignSelf:"center",
        marginHorizontal:"auto",
        fontFamily:"Inter_600SemiBold",
        width:"65%"
        
        
    },
    triggerButton:{
        justifyContent:"center",
        alignSelf:"center",
        borderRadius:15,
        backgroundColor:"#2ad",
        marginHorizontal:"auto",
        paddingHorizontal:"5%",
        elevation: 5,
        
        
        
        height:65,
        shadowColor:"#000",
        shadowOffset: {width:1, height:0},
        shadowRadius:5,
    },
    iconText:{
        borderTopWidth:1,
        borderTopColor: "white",
        textAlign:"center",
        fontFamily:"Inter_600SemiBold"
    }
})