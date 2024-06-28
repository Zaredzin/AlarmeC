import {Text, View, Pressable} from 'react-native';
import { styles } from '@/components/styles';
import { AntDesign } from '@expo/vector-icons';

export default function(){
    return(
        <View style={styles.mainContainer}>
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
              <Pressable style={styles.roomButton}><Text> Habitación</Text></Pressable>
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
