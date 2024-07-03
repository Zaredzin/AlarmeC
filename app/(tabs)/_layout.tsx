import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { StyleSheet } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs  screenOptions={{ tabBarActiveTintColor: 'white', tabBarInactiveBackgroundColor: 'white', tabBarActiveBackgroundColor: '#A5D7E8', tabBarStyle: {borderTopWidth: 3, borderColor: "#A5D7E8"} }}>
      <Tabs.Screen
        name="Eventos"
        options={{
          title: 'Eventos',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />
      
    </Tabs>
    
  );
}

