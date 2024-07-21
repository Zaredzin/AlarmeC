import {Text, View, Pressable, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity, Platform,useWindowDimensions} from 'react-native';
import { Stack } from 'expo-router';
import EventIcon from '@/components/EventComponents/EventIcon';
import { LinearGradient } from 'expo-linear-gradient';
import IndexIcon from "@/components/EventComponents/IndexIcon";
import { IconEntypo } from '@/components/EventComponents/IndexIconEntypo';
import { StatusBar } from 'expo-status-bar';
import { BlurView } from 'expo-blur';
import  HomeComponents, { HomeTriggerView, HumiditySensor, OxygenSensor, TempSensor,RoomMenu, RoomSelector }  from '../../components/HomeComponents/HomeComponents'
import { MaterialI } from '@/components/EventComponents/IndexIconEntypo';
import { GasConcentration } from '../../components/HomeComponents/HomeComponents';
import {Inter_600SemiBold} from "@expo-google-fonts/inter";
import React, {useState,useEffect,useCallback} from 'react';
import { MotiView } from 'moti';
import { useFonts } from "expo-font";
import * as SplashScreen from 'expo-splash-screen';



const roomData = {
    Habitaciones:{
        Cocina: {
            sensors: {
                temperature: '27°',
                oxygenLevel: '71%',
                humidityLevel: '65%',
                gasLevel: '65%',
            },
            triggers: [
                { name: 'Puerta este', action: true },
                { name: 'Puerta oeste', action: false },
                { name: 'Ventana oeste', action: false},
                { name: 'Puerta oeste', action: false },
                { name: 'Ventana oeste', action: false},
            ],
        },
        Taller: {
            sensors: {
                temperature: '25°',
                oxygenLevel: '75%',
                humidityLevel: '60%',
                gasLevel: '60%',
            },
            triggers: [
                { name: 'Puerta', action: true },
                { name: 'Ventilador', action: false },
            ],
        },
        Pito: {
            sensors: {
                temperature: '25°',
                oxygenLevel: '75%',
                humidityLevel: '60%',
                gasLevel: '60%',
            },
            triggers: [
                { name: 'Puerta', action: true },
                { name: 'Ventilador', action: false },
            ],
        },
    }
    

};

export default function(){
    const [showMenu, setShowMenu] = useState(false);

    // Función para mostrar u ocultar el menú
    const toggleMenu = () => {
        setShowMenu(!showMenu); // Invertir valor actual de showMenu
    };

    const rooms = Object.keys(roomData.Habitaciones);
    const [selectedRoom, setSelectedRoom] = useState(rooms[0]); // Estado para la habitación seleccionada

    const handleRoomPress = (room) => {
        setSelectedRoom(room);
        setShowMenu(false); // Cerrar el menú después de seleccionar una habitación
    };

    
    const { width, height } = useWindowDimensions();

    useEffect(() => {
        SplashScreen.preventAutoHideAsync();
      
        async function prepare() {
          await SplashScreen.preventAutoHideAsync();
        }
      
        prepare().then(() => {
          SplashScreen.hideAsync();
        });
      }, []);
      
      
      
      const [fontsLoaded] = useFonts({
        
        Inter_600SemiBold,
      });
      
      
      
      const onLayout = useCallback(async() => {
        if(fontsLoaded){
            await SplashScreen.hideAsync();
        }
      }, [fontsLoaded])
      
      if (!fontsLoaded) return null;






    





    return(
        

        
        
        <View onLayout={onLayout} style={{backgroundColor:"#101727", width:"100%", height:"100%"}}
        
        
        
        >
            <StatusBar style="light"  backgroundColor="#121532" />
            
            <Stack.Screen

                options={{ headerShown: false }}
            />
            
                <BlurView style={styles.container1}>
                
                    <Text style={styles.Title}>No se han registrado eventos</Text>

                </BlurView>
            <View style={[styles.containerContainer, {backgroundColor:"#00000000"}]}>
                <TouchableOpacity onPress={toggleMenu}  style={[styles.roomButton,{flexDirection:"row"}]}>
                    <LinearGradient colors={['#164b6a',  '#0B2447']}  
                        start={{
                        x: 0,
                        y: 0
                        }}
                        end={{
                            x: 1,
                            y: 1
                        }} style={{width:"100%", borderRadius:15,zIndex:2}}>
                            <View style={{flexDirection:"row"}}>
                                <View style={{width:"65%"}}>
                                    <Text style={styles.roomButtonText}>{selectedRoom ? selectedRoom : "Habitación"}</Text>
                                </View>
                                <View style={{width:"25%", backgroundColor:"#fff", borderTopLeftRadius:15, borderTopRightRadius:15, alignSelf:"flex-end",}}>
                                    <EventIcon  icon="down" colorI="#000" size={20} />
                                </View>
                                
                            </View>
                            

                            
                        

                    </LinearGradient>
                        
                </TouchableOpacity>
                {showMenu && <RoomMenu rooms={rooms}  handleRoomPress={handleRoomPress}>
                        

                    </RoomMenu>}
                    {selectedRoom && (
                    <View style={styles.container2}>
                        {/* Muestra los sensores de la habitación */}
                        <View style={{ flexDirection: "row" }}>
                            <View style={[styles.SensorsContainer, { flexDirection: "column", justifyContent: "space-around" }]}>
                                <IndexIcon icon={"temperature-empty"} colorI={"#00ff00"} size={26} />
                                <TempSensor temp={roomData.Habitaciones[selectedRoom].sensors.temperature} />
                            </View>

                            <View style={[styles.SensorsContainer, { flexDirection: "column", justifyContent: "space-around" }]}>
                                <IconEntypo icon={"air"} colorI={"gray"} size={26} />
                                <OxygenSensor oxygenLevel={roomData.Habitaciones[selectedRoom].sensors.oxygenLevel} />
                            </View>

                            <View style={[styles.SensorsContainer, { flexDirection: "column", justifyContent: "space-around" }]}>
                                <IconEntypo icon={"water"} colorI={"#2ad"} size={26} />
                                <HumiditySensor humidityLevel={roomData.Habitaciones[selectedRoom].sensors.humidityLevel} />
                            </View>

                            <View style={[styles.SensorsContainer, { flexDirection: "column", justifyContent: "space-around" }]}>
                                <MaterialI icon={"gas-meter"} colorI={"orange"} size={28} />
                                <GasConcentration gasLevel={roomData.Habitaciones[selectedRoom].sensors.gasLevel} />
                            </View>
                        </View>
                    </View>
                )}
            
            {selectedRoom && (
                    <View  style={Platform.OS === 'web' ?  styles.container3 && {height: height * 0.5, width: width* 0.65}  : styles.container3}>
                        {/* Muestra los accionadores de la habitación */}
                        <ScrollView >
                            {roomData.Habitaciones[selectedRoom].triggers.map((trigger, index) => (
                                <HomeTriggerView key={index} triggerName={trigger.name} action={trigger.action} />
                            ))}
                        </ScrollView>
                    </View>
                )}
            </View>


        </View>
        
    );
}


const styles = StyleSheet.create ({
    

    scrollViewWeb:{
        
    },
    roomButton:{
        width:"90%",
        //backgroundColor: "#0B2447",
        justifyContent:'center',
       
        textAlign: 'center',
        paddingVertical: 2,
        
        borderRadius: 12,

        elevation: 5,
        zIndex:2
    },
    roomButtonText:{
        fontSize: 24,
        color:"white",
        textAlign: 'center',
        fontFamily:"Inter_600SemiBold"
    },
    line:{
        alignSelf:"center",
        width:"95%",
        borderBottomColor: "gray",
        borderBottomWidth:1,
        marginVertical: 5,
        elevation: 2,
      },
    Title: {
        fontSize: 20,
        color: 'white',
        textShadowColor: 'rgba(0,0,0,0.2)',
        //elevation:5,
        //textShadowRadius:3,
        //textShadowOffset:{
        //    width:2,height:1,
        //}
    },
    box:{
        width: "100%",
        height: "100%"
    },
    mainContainer: {
        marginVertical: 0,
        marginHorizontal:0,
        flex: 1,
        
        //borderColor: 'red',
        //borderWidth: 2,
        backgroundColor: "#d7dbdd" ,
        zIndex:3

    },
    container1:{
        //borderColor: "#007AA2",
        //borderWidth: 2,
        marginTop: 8,
        marginHorizontal:8,
        flexDirection: 'row',
        justifyContent: 'center',  
        //backgroundColor: "#f5f7fa",
        padding:15,
        //elevation:5,
        //borderColor:"#2ad",
        //borderWidth:1,
        borderRadius: 15,
        borderCurve:"continuous",
        overflow:"hidden",
        height:60
        

    },
    container2:{
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent:"center",
       
        alignItems:"center",
       // backgroundColor: "#f5f7fa",
        marginHorizontal:8,
        //borderColor: 'black',
        //borderWidth: 2,
        
        /*borderBottomWidth: 2,
        borderBottomColor: "#2ad",
        
        borderBottomStartRadius:12,
        borderBottomEndRadius:12,
        borderCurve:"continuous",
        paddingVertical: 12,
        //elevation:5,*/
        height:120,
        //borderBottomWidth:2,
        //borderBottomColor: "#2ad",
        //borderTopWidth:0,
        //borderTopLeftRadius:0,
        //borderTopRightRadius:0,
        //borderStartWidth:0,
        //borderEndWidth:0,
        //borderColor:"#2ad",
        //borderWidth:1,
        borderRadius: 15,
        borderCurve:"continuous",



        
    },

    SensorsContainer:{
        width:75,
        margin: 5,
        padding: 10,
        justifyContent: 'center',
        alignItems:"center",
        height: 75,
        //borderWidth: 0.8,
        borderRadius: 12,
        //borderColor:"#2ad",
    
        backgroundColor: "#172144",
        elevation:5,
        
        

    },
    sensorsText:{
        fontSize: 14,
        textShadowColor: 'rgba(0,0,0,0.2)',
        textShadowRadius:3,
        textShadowOffset:{
            width:2,height:1,
        }
    },
    container3:{
        marginTop:8,
        width:300,
        
        //borderColor: 'blue',
        //borderWidth: 2,
        justifyContent: 'center',
        //backgroundColor:"#d7dbdd",
        paddingBottom:6,
        marginHorizontal:8,
        //elevation:5,
        
        alignItems:"center",
        //height:330,
        height:340,

        //borderTopWidth:2,
        //borderTopColor: "#2ad",
        //borderColor:"#2ad",
        //borderWidth:1,
        borderColor:"#2ad",
        borderTopWidth:1,
        borderBottomWidth:1,
        borderBottomLeftRadius:3,
        borderBottomRightRadius:3,
        //borderRadius: 15,
        //borderCurve:"continuous",
        overflow:"hidden"
       
        
    

    },
    containerContainer:{
        alignSelf:"center",
        marginHorizontal:8,
        marginTop:8,
        width:"95%",
        height:"89%",
        //borderColor: 'blue',
        //borderWidth: 2,
       
        backgroundColor:"#f5f7fa",
        paddingBottom:6,
        
        //elevation:5,
        
        alignItems:"center",
        
        //borderTopWidth:2,
        //borderTopColor: "#2ad",
        //borderColor:"#2ad",
        //borderWidth:1,
        borderRadius: 15,
        borderCurve:"continuous",
        borderBottomLeftRadius:30,
        borderBottomRightRadius:30,
    },
    
    
    
})