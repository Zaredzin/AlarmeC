import {Text, View, Pressable, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity} from 'react-native';
import { AntDesign, FontAwesome6 } from '@expo/vector-icons';
import { Stack } from 'expo-router';
import EventIcon from '@/components/EventComponents/EventIcon';
import TriggerIcon from '@/components/indexComponents/TriggerIcon';
import { LinearGradient } from 'expo-linear-gradient';
import IndexIcon from "@/components/EventComponents/IndexIcon";
import IndexIconEntypo from '@/components/EventComponents/IndexIconEntypo';
import { StatusBar } from 'expo-status-bar';




export default function(){
    return(
        

        
        
        <LinearGradient style={styles.mainContainer}
        colors={['#0B2447', '#576CBC','#19376D', '#0B2447']} 
        start={{
            x: 0,
            y: 0
        }}
        end={{
            x: 1,
            y: 1
        }}
        
        
        >
            <StatusBar style="light"  backgroundColor="#121532" />
            
            <Stack.Screen

                options={{ headerShown: false }}
            />
            <View style={styles.container1}>
                <View style={{alignContent:"center", alignSelf:"center",  flex:1, alignItems: "center"}}>
                    <AntDesign name="check" size={36} color="green" />
                </View>
                
                <Text style={styles.Title}>No se han registrado eventos</Text>

            </View>
            <View style={styles.container2}>
                    <View style={styles.SensorsContainer}>
                        <IndexIcon icon={"temperature-empty"} colorI={"#000"} size={28}/>
                    </View>
                    <View style={styles.SensorsContainer}>
                        <IndexIconEntypo icon={"air"} colorI={"gray"} size={28} style={"marginHorizontal: 20,"}/>
                    </View>
                    <View style={styles.SensorsContainer}>
                        <IndexIconEntypo icon={"water"} colorI={"#00f"} size={28}/>
                    </View>
                
                
                
            </View>
            
            <View style={styles.container3}>
              <TouchableOpacity  style={styles.roomButton}>
                <Text style={styles.roomButtonText}> Habitación</Text>
              </TouchableOpacity>
              <ScrollView style={{flex:1}} >  
                      <View  style={styles.triggerContainer}>
                          <Text style={styles.triggerContainerText}>Puerta cocina</Text>
                          <TouchableOpacity style={styles.triggerButton}>
                            <TriggerIcon icon={"door-closed"} size={54} colorI={"black"}/>
                            <Text style={styles.iconText}>Cerrar</Text>
                          </TouchableOpacity>
                          
                      </View>
                      <View  style={styles.triggerContainer}>
                          <Text style={styles.triggerContainerText}>Puerta cocina</Text>
                          <TouchableOpacity style={styles.triggerButton}>
                            <TriggerIcon icon={"door-closed"} size={54} colorI={"black"}/>
                            <Text style={styles.iconText}>Cerrar</Text>
                          </TouchableOpacity>
                          
                      </View>
                      <View  style={styles.triggerContainer}>
                          <Text style={styles.triggerContainerText}>Puerta cocina</Text>
                          <TouchableOpacity style={styles.triggerButton}>
                            <TriggerIcon icon={"door-closed"} size={54} colorI={"black"}/>
                            <Text style={styles.iconText}>Cerrar</Text>
                          </TouchableOpacity>
                          
                      </View>
                      <View  style={styles.triggerContainer}>
                          <Text style={styles.triggerContainerText}>Puerta cocina</Text>
                          <TouchableOpacity style={styles.triggerButton}>
                            <TriggerIcon icon={"door-closed"} size={54} colorI={"black"}/>
                            <Text style={styles.iconText}>Cerrar</Text>
                          </TouchableOpacity>
                          
                      </View>
 
              </ScrollView>
            </View>



        </LinearGradient>
        
    );
}


const styles = StyleSheet.create ({
    Title: {
        fontSize: 28,
        color: 'green',
        textShadowColor: 'rgba(0,0,0,0.2)',
        textShadowRadius:3,
        textShadowOffset:{
            width:2,height:1,
        }
    },
    box:{
        width: "100%",
        height: "100%"
    },
    mainContainer: {
        marginVertical: 0,
        marginHorizontal:0,
        flex: 1,
        padding: 5,
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
        borderRadius: 15,
        backgroundColor: "#f5f7fa",
        padding:15,
        elevation:5,
        

    },
    container2:{
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'center',
       
        alignItems:"center",
        backgroundColor: "#f5f7fa",
        marginHorizontal:8,
        //borderColor: 'black',
        //borderWidth: 2,
        borderRadius: 15,
        paddingHorizontal:16,
        paddingVertical: 12,
        elevation:5,
        height:80,
        
    },

    SensorsContainer:{
        width:95,
        margin: 5,
        padding: 10,
        justifyContent: 'center',
        height: 65,
        //borderWidth: 0.8,
        borderRadius: 12,
    
        backgroundColor: "white",
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
        //borderColor: 'blue',
        //borderWidth: 2,
        justifyContent: 'center',
        backgroundColor:"#f5f7fa",
        paddingBottom:6,
        marginHorizontal:8,
        elevation:5,
        
        alignItems:"center",
        height:330,
        borderTopWidth:2,
        borderTopColor: "#2ad",
        borderColor:"#2ad",
        borderWidth:1,
        borderRadius: 15,
        borderCurve:"continuous",
       
        
    

    },
    roomButton:{
        
        width:335,
        justifyContent:'center',
        
        backgroundColor: "#2ad",
        textAlign: 'center',
        paddingVertical: 2,
        marginBottom: 10,
        borderRadius: 12,
        elevation: 20,
    },
    roomButtonText:{
        fontSize: 24,
        color:"white",
        textAlign: 'center',
    },
    triggerContainer:{
        height:110,
        width:300,
        justifyContent:'center',
        flexDirection: "row",
        //borderWidth: 2,
        borderRadius: 12,
        //borderColor: 'orange',
        textAlign: 'center',
        paddingVertical: 15,
        marginHorizontal:8,
        elevation:5,
        marginVertical: 3,
        backgroundColor: "#0B2447",
    },
    triggerContainerText:{
        fontSize:20,
        color: "white",
        fontWeight: "500",
        justifyContent:'center',
        textAlign: 'center',
        alignSelf:"center",
        marginHorizontal:"auto",
        textShadowColor: 'rgba(0,0,0,0.2)',
        textShadowRadius:3,
        textShadowOffset:{
            width:2,height:1,
        }
    },
    triggerButton:{
        borderRadius:15,
        backgroundColor:"white",
        marginHorizontal:"auto",
        paddingHorizontal:"5%",
        elevation: 5,
    },
    iconText:{
        borderTopWidth:1,
        borderTopColor: "gray",
        textAlign:"center",
    }
})