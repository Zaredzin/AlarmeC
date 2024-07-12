import {Text, View, Pressable, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity} from 'react-native';
import { AntDesign, FontAwesome6 } from '@expo/vector-icons';
import { Stack } from 'expo-router';
import EventIcon from '@/components/EventComponents/EventIcon';
import TriggerIcon from '@/components/indexComponents/TriggerIcon';
import { LinearGradient } from 'expo-linear-gradient';
import IndexIcon from "@/components/EventComponents/IndexIcon";
import IndexIconEntypo from '@/components/EventComponents/IndexIconEntypo';
import { StatusBar } from 'expo-status-bar';
import { BlurView } from 'expo-blur';




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
            
                <BlurView style={styles.container1}>
                
                    <Text style={styles.Title}>No se han registrado eventos</Text>

                </BlurView>
            <View style={styles.containerContainer}>
                <TouchableOpacity  style={styles.roomButton}>
                        <Text style={styles.roomButtonText}> Habitación</Text>
                </TouchableOpacity>
                <View style={styles.container2}>
                        <View style={styles.SensorsContainer}>
                            <IndexIcon icon={"temperature-empty"} colorI={"#000"} size={26}/>
                        </View>
                        <View style={styles.SensorsContainer}>
                            <IndexIconEntypo icon={"air"} colorI={"gray"} size={26} />
                        </View>
                        <View style={styles.SensorsContainer}>
                            <IndexIconEntypo icon={"water"} colorI={"#2ad"} size={26}/>
                        </View>
                
                
                
                </View>
            
                <LinearGradient  style={styles.container3}
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
                    
                    <ScrollView style={{flex:1}} >
                        <View style={styles.line}/>
                      <BlurView  style={styles.triggerContainer}>
                          <Text style={styles.triggerContainerText}>Puerta cocina</Text>
                          <TouchableOpacity style={styles.triggerButton}>
                            <TriggerIcon icon={"door-closed"} size={34} colorI={"black"}/>
                            <Text style={styles.iconText}>Cerrar</Text>
                          </TouchableOpacity>
                          
                      </BlurView>
                      <View style={styles.line}/>
                      <BlurView  style={styles.triggerContainer}>
                          <Text style={styles.triggerContainerText}>Puerta cocina</Text>
                          <TouchableOpacity style={styles.triggerButton}>
                            <TriggerIcon icon={"door-open"} size={34} colorI={"black"}/>
                            <Text style={styles.iconText}>Abrir</Text>
                          </TouchableOpacity>
                          
                      </BlurView>
                      <View style={styles.line}/>
                      <BlurView  style={styles.triggerContainer}>
                          <Text style={styles.triggerContainerText}>Puerta cocina</Text>
                          <TouchableOpacity style={styles.triggerButton}>
                            <TriggerIcon icon={"door-closed"} size={34} colorI={"black"}/>
                            <Text style={styles.iconText}>Cerrar</Text>
                          </TouchableOpacity>
                          
                      </BlurView>
                      <View style={styles.line}/>
                      <BlurView  style={styles.triggerContainer}>
                          <Text style={styles.triggerContainerText}>Puerta cocina</Text>
                          <TouchableOpacity style={styles.triggerButton}>
                            <TriggerIcon icon={"door-closed"} size={34} colorI={"black"}/>
                            <Text style={styles.iconText}>Cerrar</Text>
                          </TouchableOpacity>
                          
                      </BlurView>
                      <View style={styles.line}/>
                      <BlurView  style={styles.triggerContainer}>
                          <Text style={styles.triggerContainerText}>Puerta cocina</Text>
                          <TouchableOpacity style={styles.triggerButton}>
                            <TriggerIcon icon={"door-closed"} size={34} colorI={"black"}/>
                            <Text style={styles.iconText}>Cerrar</Text>
                          </TouchableOpacity>
                          
                      </BlurView>
                      <View style={styles.line}/>
                      

                      
 
                    </ScrollView>
                </LinearGradient>
            </View>


        </LinearGradient>
        
    );
}


const styles = StyleSheet.create ({
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
        elevation:5,
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
        borderColor:"#2ad",
        borderWidth:1,
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
        height:80,
        borderBottomWidth:2,
        borderBottomColor: "#2ad",
        borderTopWidth:0,
        borderTopLeftRadius:0,
        borderTopRightRadius:0,
        borderStartWidth:0,
        borderEndWidth:0,
        borderColor:"#2ad",
        borderWidth:1,
        borderRadius: 15,
        borderCurve:"continuous",



        
    },

    SensorsContainer:{
        width:95,
        margin: 5,
        padding: 10,
        justifyContent: 'center',
        height: 65,
        borderWidth: 0.8,
        borderRadius: 12,
        borderColor:"#2ad",
    
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
        width:320,
        //borderColor: 'blue',
        //borderWidth: 2,
        justifyContent: 'center',
        backgroundColor:"#0B2447",
        paddingBottom:6,
        marginHorizontal:8,
        elevation:5,
        
        alignItems:"center",
        //height:330,
        height:420,
        borderTopWidth:2,
        borderTopColor: "#2ad",
        borderColor:"#2ad",
        borderWidth:1,
        borderRadius: 15,
        borderCurve:"continuous",
        overflow:"hidden"
       
        
    

    },
    containerContainer:{
        alignSelf:"center",
        marginTop:8,
        width:"95%",
        height:"89%",
        //borderColor: 'blue',
        //borderWidth: 2,
       
        backgroundColor:"#f5f7fa",
        paddingBottom:6,
        
        elevation:5,
        
        alignItems:"center",
        
        borderTopWidth:2,
        borderTopColor: "#2ad",
        borderColor:"#2ad",
        borderWidth:1,
        borderRadius: 15,
        borderCurve:"continuous",
        borderBottomLeftRadius:30,
        borderBottomRightRadius:30,
    },
    roomButton:{
        width:"100%",
        justifyContent:'center',
        backgroundColor: "#0B2447",
        textAlign: 'center',
        paddingVertical: 2,
        
        borderRadius: 12,
        borderBottomStartRadius:0,
        borderBottomEndRadius:0,
        elevation: 5,
    },
    roomButtonText:{
        fontSize: 24,
        color:"white",
        textAlign: 'center',
    },
    triggerContainer:{
        height:80,
        width:300,
        justifyContent:'center',
        flexDirection: "row",
        overflow:"hidden",
        
        borderWidth: 1,
        borderRadius: 12,
        borderColor: '#2ad',
        textAlign: 'center',
        paddingVertical: 15,
        marginHorizontal:8,
        //elevation:5,
        marginVertical: 3,
        //backgroundColor: "#dedede",
    },
    triggerContainerText:{
        fontSize:22,
        color: "#f5f7fa",
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
        //textShadowColor: 'rgba(0,0,0,0.2)',
        //textShadowRadius:3,
        //textShadowOffset:{
        //    width:2,height:1,
        //}
    },
    triggerButton:{
        justifyContent:"center",
        alignSelf:"center",
        borderRadius:15,
        backgroundColor:"white",
        marginHorizontal:"auto",
        paddingHorizontal:"5%",
        elevation: 5,
        borderWidth:1,
        borderColor:"#0B2447",
        height:65
    },
    iconText:{
        borderTopWidth:1,
        borderTopColor: "gray",
        textAlign:"center",
    }
})