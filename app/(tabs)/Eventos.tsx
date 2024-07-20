import { Pressable, Text, View, ScrollView, useWindowDimensions } from "react-native";
import { Stack } from "expo-router";
import { EventDay, EventMonth, EventView } from "@/components/EventComponents/EventComponents";
import { StyleSheet } from "react-native";
import EventIcon from "@/components/EventComponents/EventIcon";
import { TouchableOpacity } from "react-native-gesture-handler";
import { BlurView } from "expo-blur";
import * as Permissions from 'expo-permissions';
import {Calendar} from 'react-native-calendars'


import React, { useState } from "react";

export default function () {
  const eventData = {
    July: {
      '19': [
        { time: '09:00 am', description: 'The humidity level is lower than expected.', icon: 'water' },
        { time: '02:00 pm', description: 'Gas levels are within normal range.', icon: 'gas' },
      ],
      '20': [
        { time: '09:00 am', description: 'The humidity level is lower than expected.', icon: 'water' },
        { time: '02:00 pm', description: 'Gas levels are within normal range.', icon: 'gas' },
      ],
      '21': [
        { time: '09:00 am', description: 'The humidity level is lower than expected.', icon: 'water' },
        { time: '02:00 pm', description: 'Gas levels are within normal range.', icon: 'gas' },
      ],
    },
    // Agrega más meses y días aquí
  };

  const transformDataToDates = (data) => {
    let dates = [];
    for (const month in data) {
        for (const day in data[month]) {
            dates.push(`${day} ${month}`);
        }
    }
    return dates;
};

const dates = transformDataToDates(eventData);

  const currentDate = new Date();
  const currentMonth = currentDate.toLocaleString('default', { month: 'long' });
  const currentDay = currentDate.getDate().toString();

  // Asegúrate de que todayEvents siempre sea un array, incluso si no hay eventos
  const todayEvents = eventData[currentMonth]?.[currentDay] || [];

  const [showMenu, setShowMenu] = useState(false);

  // Función para mostrar u ocultar el menú
  const toggleMenu = () => {
      setShowMenu(!showMenu);
  };



    const [selectedDate, setSelectedDate] = useState(dates[0]); // Estado para la fecha seleccionada

    const handleDatePress = (date) => {
        setSelectedDate(date);
        setShowMenu(false); // Cerrar el menú después de seleccionar una fecha
    };



  return (
    <View style={{ backgroundColor: "#101727", width: "100%", height: "100%" }}>
      <Stack.Screen options={{ headerShown: false }} />

      <BlurView style={styles.monthView}>
        <EventMonth month={currentMonth} />
      </BlurView>
      <View style={styles.containerContainer}>
        <View style={styles.mainContainer}>
          <View>
            <EventDay day={`Día ${currentDay}`} />
            <View style={styles.scrollContainer}>
              <ScrollView style={{ flex: 1 }}>
                {todayEvents.length > 0 ? (
                  todayEvents.map((event, index) => (
                    <EventView key={index} time={event.time} description={event.description} icon={event.icon} />
                  ))
                ) : (
                  <Text style={styles.noEventsText}>No hay eventos registrados el día de hoy.</Text>
                )}
              </ScrollView>
            </View>
          </View>
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
