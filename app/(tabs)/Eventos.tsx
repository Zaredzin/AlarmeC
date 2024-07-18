import { Pressable, Text,View, ScrollView, } from "react-native";
import { Stack } from "expo-router";
import {EventDay, EventMonth, EventView} from "@/components/EventComponents/EventComponents";
import { StyleSheet } from "react-native";
import EventIcon from "@/components/EventComponents/EventIcon";
import { TouchableOpacity } from "react-native-gesture-handler";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";


export default function (){
    return(

      <LinearGradient style={styles.mainContainer0}
        colors={['#0B2447', '#576CBC','#19376D', '#0B2447']} 
        start={{
            x: 0,
            y: 0
        }}
        end={{
            x: 1,
            y: 1
        }}
        
        
        >
        <Stack.Screen options={{ headerShown: false }}/>

        <BlurView style={styles.monthView}>
          <EventMonth month={"November"}/>
        </BlurView>
            <View style={styles.containerContainer}>
              <View style={styles.mainContainer}>
                <View>
                  <EventDay day={"Martes"}/>
                  <View style={styles.scrollContainer}
                   
                  
                  
                  >
                    <ScrollView style={{flex:1}}>
                      <EventView time={"10:00 am"} description={"The oxygen level has decreased to a critical value."}/>
                      <EventView time={"10:00 am"} description={"The oxygen level has decreased to a critical value."}/>
                      <EventView time={"10:00 am"} description={"The oxygen level has decreased to a critical value."}/>
                      <EventView time={"10:00 am"} description={"The oxygen level has decreased to a critical value."}/>
                      <EventView time={"10:00 am" } description={"The oxygen level has decreased to a critical value."}/>
                      <EventView time={"10:00 am"} description={"The oxygen level has decreased to a critical value."}/>
                      <EventView time={"10:00 am"} description={"The oxygen level has decreased to a critical value."}/>
                  


                    </ScrollView>
                  </View>
                
                

                </View>
              </View>
            </View>

      </LinearGradient>
    )
  }

  const styles =StyleSheet.create({

  containerContainer:{
    alignSelf:"center",
    marginTop:8,
    width:"95%",
    height:"89%",
    backgroundColor:"#f5f7fa",
    paddingBottom:6,
    elevation:5,
    //borderTopWidth:2,
    //borderTopColor: "#2ad",
    borderColor:"#2ad",
    //borderWidth:1,
    borderRadius: 15,
    borderCurve:"continuous",
    borderBottomLeftRadius:30,
    borderBottomRightRadius:30,
},
  mainContainer0: {
    marginVertical: 0,
    marginHorizontal:0,
    flex: 1,
    backgroundColor: "#d7dbdd" ,
},
    Title: {
      fontSize: 20,
      color: 'white',
      textShadowColor: 'rgba(0,0,0,0.2)',
      elevation:5,
      textShadowRadius:3,
      textShadowOffset:{
          width:2,height:1,
      }
  },
    monthView:{

      height:60,
      marginTop:8,
      marginHorizontal:8,
      flexDirection: 'row',
      justifyContent: 'center',  
      padding:15,
      borderColor:"#2ad",
      //borderWidth:1,
      borderRadius: 15,
      borderCurve:"continuous",
      overflow:"hidden",
      

  },
    scrollContainer:{
      marginTop:8,
      //backgroundColor:"#f5f7fa",
      //paddingBottom:6,
      //paddingTop:6,
      //elevation:5,
      width:320,
      height:480,
      //borderTopWidth:2,
      //borderTopColor: "#2ad",
      borderColor:"#2ad",
      borderTopWidth:1,
      borderBottomWidth:1,
      borderRadius: 15,
      borderCurve:"continuous",
      flex:1,
      
      //backgroundColor:"#0B2447"

  },
    dayContainer:{
      flexDirection: "row",
      //borderColor:"red",
      //borderWidth: 2,
    },
    day:{
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 10,
      marginTop: 15,
      textShadowColor: "gray",
      textShadowOffset: {
        width: 1, height: 1
      },
      textShadowRadius: 3
    },

    mainContainer:{
      justifyContent:"center",
      alignSelf:"center",
      height:554.5,
      marginHorizontal:8,
      elevation:5
    },
  })
    