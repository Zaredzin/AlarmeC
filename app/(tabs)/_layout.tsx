import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { StyleSheet } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs  screenOptions={{ tabBarActiveTintColor: 'white', tabBarInactiveBackgroundColor: '#0B2447', tabBarActiveBackgroundColor: '#A5D7E8', tabBarStyle: {borderTopWidth: 2, borderColor: "#19376D"} }}>
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
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
        }}
      />
      
    </Tabs>
    
  );
}

const styles = StyleSheet.create({
  barStyles:{
    borderTopWidth: 2,
    borderColor: "#19376D"
  }
})