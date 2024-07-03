import { Pressable, Text,View } from "react-native";
import { Stack } from "expo-router";
import EventView from "@/components/EventComponents/EventView";
import { StyleSheet } from "react-native";
import EventHeader from "@/components/EventComponents/EventHeader";
import EventIcon from "@/components/EventComponents/EventIcon";

export default function (){
    return(
      <View>
        <Stack.Screen options={{ headerShown: false }}/>
        <View style={styles.monthView}>
          <Pressable>
            <Text style={{fontSize: 32, textAlign:"center",fontWeight:"bold", color:"white"}}>Noviembre</Text>
          </Pressable>
          
        </View>
          <View style={styles.mainContainer}>
              <View>
                <Pressable style={styles.dayContainer}>
                  <Text style={styles.day}>Martes 17</Text>
                  <EventIcon icon="down" colorI="gray" ></EventIcon>
                </Pressable>
                
                <View style={styles.eventContainer}>
                  <Text style={styles.timeContainer}>10:00 am</Text>
                  <View style={styles.alertMainContainer}>
                    <View style={styles.line}></View>
                    <View style={styles.alertContainer}>
                    <Text>pito</Text>
                    </View>
                    
                    <View style={styles.line}></View>

                  </View>
                  
                </View>
                <View style={styles.eventContainer}>
                  <Text style={styles.timeContainer}>10:00 am</Text>
                  <View style={styles.alertMainContainer}>
                    <View style={styles.line}></View>
                    <View style={styles.alertContainer}>
                    <Text>pito</Text>
                    </View>
                    
                    <View style={styles.line}></View>

                  </View>
                  
                </View>
                <View style={styles.eventContainer}>
                  <Text style={styles.timeContainer}>10:00 am</Text>
                  <View style={styles.alertMainContainer}>
                    <View style={styles.line}></View>
                    <View style={styles.alertContainer}>
                    <Text>pito</Text>
                    </View>
                    
                    <View style={styles.line}></View>

                  </View>
                  
                </View>
                <View style={styles.eventContainer}>
                  <Text style={styles.timeContainer}>10:00 am</Text>
                  <View style={styles.alertMainContainer}>
                    <View style={styles.line}></View>
                    <View style={styles.alertContainer}>
                    <Text>pito</Text>
                    </View>
                    
                    <View style={styles.line}></View>

                  </View>
                  
                </View>
                <View style={styles.eventContainer}>
                  <Text style={styles.timeContainer}>10:00 am</Text>
                  <View style={styles.alertMainContainer}>
                    <View style={styles.line}></View>
                    <View style={styles.alertContainer}>
                    <Text>pito</Text>
                    </View>
                    
                    <View style={styles.line}></View>

                  </View>
                  
                </View>
                

              </View>
          </View>
      </View>
    )
  }

  const styles =StyleSheet.create({
    monthView:{
      backgroundColor: "black",
      borderBottomRightRadius: 8,
      borderBottomLeftRadius: 8,
      paddingVertical:5,
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
    },

    mainContainer:{
      marginHorizontal: 10,
      //borderColor: "black",
      //borderWidth: 2,
    },
    eventContainer:{
      //borderWidth: 2,
      //borderColor: "blue",
      paddingHorizontal: 10,
      flexDirection: "row"
    },
    timeContainer:{
      //borderColor: "red",
      //borderWidth: 2,
      height:100,

    },
    alertMainContainer:{
      //borderColor: "black",
      //borderWidth: 1,
      flex:1,
      paddingHorizontal: 10,
    },
    alertContainer:{
      backgroundColor: "orange",
      padding: 8,
      borderRadius: 15,
      flex:1
    },
    line:{
      borderBottomColor: "gray",
      borderBottomWidth:1,
      marginVertical: 5,
    }
    
  })
    