import { Text,View } from "react-native";
import { Stack } from "expo-router";
import EventView from "@/components/EventComponents/EventView";
import { StyleSheet } from "react-native";
import EventHeader from "@/components/EventComponents/EventHeader";

export default function (){
    return(

    <View>
      <Stack.Screen options={{ headerShown: false }}/>
      <EventView>
        <View style={styles.container}>
            <EventHeader>
              pito
            </EventHeader>
            
        </View>
      </EventView>

    </View>

    )
}

const styles = StyleSheet.create ({
  container:{
    marginHorizontal: "auto",

  },
  eventText:{
    fontSize: 18,
  }
})