import {Text} from "react-native";
import { View } from "react-native";
import { Stack } from "expo-router";
export default function(){
  return(
    <View>
      <Stack.Screen options={{ headerShown: false }}/>
      <View>
        <Text>PITOOOO</Text>
      </View>       

    </View>
    

  );
}