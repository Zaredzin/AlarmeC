import {Text, View, Pressable, StyleSheet} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Stack } from 'expo-router';
import EventIcon from '@/components/EventComponents/EventIcon';
import TriggerIcon from '@/components/indexComponents/TriggerIcon';
import { LinearGradient } from 'expo-linear-gradient';

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
                <View style={styles.container2e}>
                    <View style={styles.SensorsContainer}><Text>Temp</Text></View>
                    <View style={styles.SensorsContainer}><Text style={styles.sensorsText}>Oxygen</Text></View>
                </View>
                <View style={styles.container2e}>
                    <View style={styles.SensorsContainer}><Text>Humidity</Text></View>
                    <EventIcon icon="frown" size={56} colorI="orange" />
                </View>
                
                
            </View>
            
            <View style={styles.container3}>
              <Pressable style={styles.roomButton}><Text style={styles.roomButton}> Habitación</Text></Pressable>
              <View>
                  <View>
                      <View  style={styles.triggerContainer}>
                          <Text style={styles.triggerContainerText}>Puerta cocina</Text>
                          <Pressable style={styles.triggerButton}>
                            <TriggerIcon icon={"door-closed"} size={54} colorI={"black"}/>
                            <Text style={styles.iconText}>Cerrar</Text>
                          </Pressable>
                          
                      </View>
                      <View  style={styles.triggerContainer}>
                          <Text style={styles.triggerContainerText}>Ventana cocina</Text>
                          <Pressable style={[styles.triggerButton,]}>
                            <TriggerIcon icon={"door-open"} size={54} colorI={"black"}/>
                            <Text style={styles.iconText}>Abrir</Text>
                          </Pressable>
                          
                      </View>
                  </View>
              </View>
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
        backgroundColor: "#f5f7fa",
        marginHorizontal:8,
        //borderColor: 'black',
        //borderWidth: 2,
        borderRadius: 15,
        paddingHorizontal:16,
        paddingVertical: 12,
        elevation:5,
        
    },
    container2e:{
        flex:1

    },
    SensorsContainer:{
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
        borderRadius: 15,
        backgroundColor:"#f5f7fa",
        paddingBottom:6,
        marginHorizontal:8,
        elevation:5,
    

    },
    roomButton:{
        fontSize: 24,
        justifyContent:'center',
        color:"white",
        backgroundColor: "#19376D",
        textAlign: 'center',
        paddingVertical: 2,
        marginBottom: 10,
        borderRadius: 12,
        elevation: 20,
        
    },
    triggerContainer:{
        justifyContent:'center',
        flexDirection: "row",
        //borderWidth: 2,
        borderRadius: 12,
        //borderColor: 'orange',
        textAlign: 'center',
        paddingVertical: 15,
        marginHorizontal:8,
        elevation:3,
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