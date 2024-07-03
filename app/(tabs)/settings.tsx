import {Text, View, Pressable, StyleSheet} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Stack } from 'expo-router';
export default function(){
    return(
        <View>
            <Stack.Screen
                options={{ headerShown: false }}
            />        
            <Text>Pito</Text>
        </View>
        
        
    )
}