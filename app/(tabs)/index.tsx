import {Text, View, Pressable, StyleSheet} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Stack } from 'expo-router';


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
                <View style={styles.SensorsContainer}><Text>Temp</Text></View>
                <View style={styles.SensorsContainer}><Text>Oxygen</Text></View>
                <View style={styles.SensorsContainer}><Text>Humidity</Text></View>
                <View style={styles.SensorsContainer}><Text>Temp</Text></View>
                <View style={styles.SensorsContainer}><Text>S</Text></View>
            </View>
            <View style={styles.container3}>
              <Pressable style={styles.roomButton}><Text style={styles.roomButton}> Habitación</Text></Pressable>
              <View>
                  <View>
                      <View  style={styles.triggerContainer}>
                          <Text style={styles.triggerContainerText}>Puerta cocina</Text>
                      </View>
                      <View  style={styles.triggerContainer}>
                          <Text style={styles.triggerContainerText}>Ventana cocina</Text>
                      </View>
                  </View>
              </View>
            </View>
            <View>
                <Text>
                    pito
                </Text>
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
        backgroundColor: "#0B2447"

    },
    container1:{
        borderColor: "#007AA2",
        borderWidth: 2,
        flexDirection: 'row',
        justifyContent: 'center',
        
        
       
        

    },
    container2:{
        flexDirection: 'row',
        justifyContent: 'center',
        borderColor: 'black',
        borderWidth: 2,
        

    },
    SensorsContainer:{
        margin: 5,
        padding: 5,
        justifyContent: 'center',
        height: 65,
        borderWidth: 2,
        borderRadius: 5,
        flex: 1,
        backgroundColor: "#A5D7E8",

    },
    container3:{
        borderColor: 'blue',
        borderWidth: 2,
        justifyContent: 'center',

    },
    roomButton:{
        fontSize: 28,
        justifyContent:'center',
        backgroundColor: "#19376D",
        textAlign: 'center',
        paddingVertical: 5,
        marginBottom: 10,
        borderRadius: 5,
        
        

    },
    triggerContainer:{
        justifyContent:'center',
        borderWidth: 2,
        borderColor: 'orange',
        textAlign: 'center',
        paddingVertical: 15,
        backgroundColor: "#576CBC"
    },
    triggerContainerText:{
        justifyContent:'center',
        textAlign: 'center',
    }
})