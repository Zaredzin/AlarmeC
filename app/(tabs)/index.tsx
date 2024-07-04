import {Text, View, Pressable, StyleSheet} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Stack } from 'expo-router';
import EventIcon from '@/components/EventComponents/EventIcon';
import TriggerIcon from '@/components/indexComponents/TriggerIcon';


export default function(){
    return(
        
        <View style={styles.mainContainer}>
            <Stack.Screen

                options={{ headerShown: false }}
            />
            <View style={styles.container1}>

                <AntDesign name="check" size={28} color="green" />
                <Text style={styles.Title}>No se han registrado eventos</Text>

            </View>
            <View style={styles.container2}>
                <View style={styles.container2e}>
                    <View style={styles.SensorsContainer}><Text>Temp</Text></View>
                    <View style={styles.SensorsContainer}><Text>Oxygen</Text></View>
                </View>
                <View style={styles.container2e}>
                    <View style={styles.SensorsContainer}><Text>Humidity</Text></View>
                    <EventIcon icon="frown" size={44} colorI="orange" />
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



        </View>
        
    );
}


const styles = StyleSheet.create ({
    Title: {
        fontSize: 28,
        color: 'green',
    },
    mainContainer: {
        marginVertical: 0,
        marginHorizontal:0,
        flex: 1,
        padding: 5,
        borderColor: 'red',
        borderWidth: 2,
        backgroundColor: "#d7dbdd" ,

    },
    container1:{
        borderColor: "#007AA2",
        borderWidth: 2,
        flexDirection: 'row',
        justifyContent: 'center',  
        borderRadius: 15,
        backgroundColor: "#f5f7fa",

    },
    container2:{
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: "#f5f7fa",
        //borderColor: 'black',
        //borderWidth: 2,
        borderRadius: 15,
        paddingHorizontal:16,
        paddingVertical: 12,
        
    },
    container2e:{
        flex:1

    },
    SensorsContainer:{
        margin: 5,
        padding: 5,
        justifyContent: 'center',
        height: 65,
        //borderWidth: 2,
        borderRadius: 12,
    
        backgroundColor: "#A5D7E8",
        elevation:5,

    },
    container3:{
        marginTop:8,
        //borderColor: 'blue',
        //borderWidth: 2,
        justifyContent: 'center',
        borderRadius: 15,
        backgroundColor:"#f5f7fa",
        paddingBottom:6,
    

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
        backgroundColor: "#576CBC",
    },
    triggerContainerText:{
        fontSize:18,
        justifyContent:'center',
        textAlign: 'center',
        alignSelf:"center",
        marginHorizontal:"auto",
    },
    triggerButton:{
        borderRadius:15,
        backgroundColor:"white",
        marginHorizontal:"auto",
        paddingHorizontal:"5%",
    },
    iconText:{
        borderTopWidth:1,
        borderTopColor: "gray",
        textAlign:"center",
    }
})