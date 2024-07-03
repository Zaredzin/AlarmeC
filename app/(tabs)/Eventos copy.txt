import { Text,View } from "react-native";
import { Stack } from "expo-router";
import EventView from "@/components/EventComponents/EventView";
import { StyleSheet } from "react-native";
import EventHeader from "@/components/EventComponents/EventHeader";
import EventIcon from "@/components/EventComponents/EventIcon";

export default function (){
    return(

    <View style={styles.mainContainer}>
      <Stack.Screen options={{ headerShown: false }}/>
      <EventView>
        <View style={styles.container}>
            <EventHeader>
              <EventIcon icon="warning" colorI='orange'/>
              
              Low oxygen level
              
            </EventHeader>
            <View>
              <Text>
                Date: 12/07/2024
                Hour: 20:38
              </Text>
            </View>
            
        </View>
      </EventView>
      <EventView>
        <View style={styles.container}>
            <EventHeader>
              <EventIcon icon="checkcircleo" colorI="green"/>
              
              Low oxygen level
              
            </EventHeader>
            <View>
              <Text>
                Date: 12/07/2024
                Hour: 20:38
              </Text>
            </View>
            
        </View>
      </EventView>

    </View>

    )
}

const styles = StyleSheet.create ({
  mainContainer:{
    borderColor:"red",
    borderWidth: 2,
    borderRadius: 10,
    height: "90%",
    marginVertical: "auto",
    alignContent:"center",
    alignSelf:"center",
    padding: 30,
    backgroundColor:"#0B2447"

  },
  container:{
    marginHorizontal: "auto",

  },
  eventText:{
    fontSize: 18,
  }
})