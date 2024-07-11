import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { StyleSheet } from 'react-native';
import {TabBar} from '../../components/TabBar';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';





export default function TabLayout() {
  return (
    
    
            


      <Tabs  tabBar={props => <TabBar {...props}/>}>
      
      
        <Tabs.Screen 
          name="Eventos"
          options={{
            title: 'Eventos',
            tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
          }}
        />
        <Tabs.Screen
          name="home"
          options={{
            title: 'Home',
            tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
          }}
        />
      

      
      </Tabs>


    
  )
}