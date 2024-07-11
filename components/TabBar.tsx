import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';



export function TabBar({ state, descriptors, navigation }) {
    const icons ={
        home: (props)=> <AntDesign name ="home" size={26} color={"#000"} {...props}/>,
        Eventos: (props)=> <MaterialIcons name ="event" size={26} color={"#000"} {...props}/>
    }

  return (
    

    <View style={s.tabBar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;
        
        if(['sitemap', '+not-found'].includes(route.name)) return null;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={route.name}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={s.tabBarItem}
          >
           {icons[route.name]({
                color: isFocused ? '#2ad' : '#222',
              })}
           
            <Text style={{ color: isFocused ? '#2ad' : '#222' }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const s = StyleSheet.create({
    tabBar:{
        
        height:75,
        flexDirection: "row",
        position:"absolute",
        
        width:"80%",
        
        alignSelf:"center",
        bottom: 20,
        justifyContent:"space-between",
        alignItems:'center',
        backgroundColor: "#fff",
        textAlign: "center",
        marginHorizontal:20,
        paddingVertical: 15,
        shadowColor:"black",
        shadowOffset:{width:0, height: 10},
        shadowRadius: 10,
        shadowOpacity:0.1,
        elevation:5,
        borderTopWidth:2,
        borderTopColor: "#2ad",
        borderColor:"#2ad",
        borderWidth:1,
        borderRadius: 15,
        borderCurve:"continuous",
        
        
        
        

    },
    tabBarItem:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        gap:4,
        
    },
})