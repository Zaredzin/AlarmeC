import { Pressable, Text, View, ScrollView, useWindowDimensions } from "react-native";
import { Stack } from "expo-router";
import { EventDay, EventMonth, EventView } from "@/components/EventComponents/EventComponents";
import { StyleSheet } from "react-native";
import EventIcon from "@/components/EventComponents/EventIcon";
import { TouchableOpacity } from "react-native-gesture-handler";
import { BlurView } from "expo-blur";
import {Calendar} from 'react-native-calendars';
import { Inter_400Regular } from "@expo-google-fonts/inter";


import React, { useState } from "react";

export default function () {
  const eventData = {
    June: {
      '11': [
        { time: '10:00 am', description: 'The humidity level is lower than expected.', icon: 'water' },
        { time: '02:00 pm', description: 'Gas levels are within normal range.', icon: 'gas' },
      ],
      '24': [
        { time: '09:00 am', description: 'The humidity level is lower than expected.', icon: 'water' },
        { time: '02:00 pm', description: 'Gas levels are within normal range.', icon: 'gas' },
      ],
      '27': [
        { time: '09:00 am', description: 'The humidity level is lower than expected.', icon: 'water' },
        { time: '02:00 pm', description: 'Gas levels are within normal range.', icon: 'gas' },
      ],
    },
    July: {
      '19': [
        { time: '10:00 am', description: 'The humidity level is lower than expected.', icon: 'water' },
        { time: '02:00 pm', description: 'Gas levels are within normal range.', icon: 'gas' },
      ],
      '20': [
        { time: '09:00 am', description: 'The humidity level is lower than expected.', icon: 'water' },
        { time: '02:00 pm', description: 'Gas levels are within normal range.', icon: 'gas' },
      ],
      '21': [
        { time: '09:00 am', description: 'The humidity level is lower than expected.', icon: 'water' },
        { time: '02:00 pm', description: 'Gas levels are within normal range.', icon: 'gas' },
        { time: '09:00 am', description: 'The humidity level is lower than expected.', icon: 'water' },
        { time: '02:00 pm', description: 'Gas levels are within normal range.', icon: 'gas' },
        { time: '09:00 am', description: 'The humidity level is lower than expected.', icon: 'water' },
        { time: '02:00 pm', description: 'Gas levels are within normal range.', icon: 'gas' },
        { time: '09:00 am', description: 'The humidity level is lower than expected.', icon: 'water' },
        { time: '02:00 pm', description: 'Gas levels are within normal range.', icon: 'gas' },
      ],
    },
    
  };

  const [selectedDate, setSelectedDate] = useState(null);

 const handleDayPress = (day) => {
    const { dateString, day: dayOfMonth } = day;
    const [year, month, dayNumber] = dateString.split('-');
    const monthName = new Date(year, month - 1, dayNumber).toLocaleString('default', { month: 'long' });
    const dayEvents = eventData[monthName]?.[dayNumber] || [];
    setSelectedDate({ date: dateString, day: dayOfMonth, events: dayEvents });
  };
//Tema del calendario
  const calendarTheme = {
    backgroundColor: '#101727',
    calendarBackground: '#101727',
    textSectionTitleColor: 'white',
    textSectionTitleDisabledColor: '#d9e1e8',
    selectedDayBackgroundColor: '#00adf5',
    selectedDayTextColor: 'white',
    todayTextColor: '#00adf5',
    dayTextColor: 'white',
    textDisabledColor: '#d9e1e8',
    dotColor: '#00adf5',
    selectedDotColor: '#ffffff',
    arrowColor: 'white',
    disabledArrowColor: '#d9e1e8',
    monthTextColor: 'white',
    indicatorColor: 'white',
    textDayFontFamily: 'monospace',
    textMonthFontFamily: 'monospace',
    textDayHeaderFontFamily: 'monospace',
    textDayFontWeight: '300',
    textMonthFontWeight: 'bold',
    textDayHeaderFontWeight: '300',
    textDayFontSize: 16,
    textMonthFontSize: 16,
    textDayHeaderFontSize: 16,
    
  };





  return (
    <View style={{ backgroundColor: "#101727", width: "100%", height: "100%" }}>
    <Stack.Screen

      options={{ headerShown: false }}
    />
      <BlurView style={styles.monthView}>
        <EventMonth month={"Events"} />
      </BlurView>
      <View style={styles.containerContainer}>
        <View style={styles.mainContainer}>
          <View style={{height: "63%"}}>
            <Calendar  theme={calendarTheme}
              onDayPress={handleDayPress}
              markedDates={{
                [selectedDate?.date]: { selected: true, selectedColor: 'blue' },
              }}
          />
          </View>
          
          {selectedDate ? (
            <>
              
              <View style={styles.scrollContainer}>
                <ScrollView style={{ flex: 1 }}>
                  {selectedDate.events.length > 0 ? (
                    selectedDate.events.map((event, index) => (
                      <EventView key={index} time={event.time} description={event.description} icon={event.icon} />
                    ))
                  ) : (
                    <Text style={styles.noEventsText}>No hay eventos registrados para esta fecha.</Text>
                  )}
                </ScrollView>
              </View>
            </>
          ) : (
            <Text style={styles.noEventsText}>Seleccione una fecha para ver eventos.</Text>
          )}
        </View>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  noEventsText: {
    color: 'white',
    textAlign: 'center',
    marginTop: 20,
  },
  containerContainer: {
    alignSelf: "center",
    marginTop: 8,
    width: "95%",
    height: "89%",
    paddingBottom: 6,
    borderColor: "#2ad",
    borderRadius: 15,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  mainContainer0: {
    marginVertical: 0,
    marginHorizontal: 0,
    flex: 1,
  },
  Title: {
    fontSize: 20,
    color: 'white',
    textShadowColor: 'rgba(0,0,0,0.2)',
    elevation: 5,
    textShadowRadius: 3,
    textShadowOffset: {
      width: 2, height: 1,
    }
  },
  monthView: {
    height: 60,
    marginHorizontal: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 15,
    borderColor: "#2ad",
    borderRadius: 15,
    overflow: "hidden",
  },
  scrollContainer: {
    marginTop: 8,
    width: 320,
    height: 480,
    borderColor: "#2ad",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRadius: 15,
    flex: 1,
  },
  dayContainer: {
    flexDirection: "row",
  },
  day: {
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
  mainContainer: {
    justifyContent: "center",
    alignSelf: "center",
    height: 554.5,
    marginHorizontal: 8,
    elevation: 5
  },
});
