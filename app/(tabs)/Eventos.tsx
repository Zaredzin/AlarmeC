import { Text,View } from "react-native";
import { Stack } from "expo-router";
export default function (){
    return(

    <View>
      <Stack.Screen options={{ headerShown: false }}/>
      <View>
        <Text>Holia</Text>
      </View>       

    </View>

    )
}