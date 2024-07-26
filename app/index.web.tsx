import { Text, View, TextInput, StyleSheet, Pressable, ScrollView, TouchableOpacity } from "react-native";
import React, { useState, useEffect,useCallback } from "react";
import { LinearGradient } from 'expo-linear-gradient';
import * as SplashScreen from 'expo-splash-screen';
import { useRouter } from 'expo-router';
import { Stack } from "expo-router";
import { BlurView } from 'expo-blur';
import EventIcon from "@/components/EventComponents/EventIcon";
import { StatusBar } from 'expo-status-bar';
import { auth } from './fireBase';  
import {Inter_600SemiBold} from "@expo-google-fonts/inter";
import { useFonts } from "expo-font";

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleLogin = async () => {
    try {
        await auth.signInWithEmailAndPassword(email, password);
        router.push('/(tabs)/home'); 
    } catch (err) {
        if (err instanceof Error) {
            setError(err.message);
        } else {
            setError('An unknown error occurred.');
        }
    }
};


useEffect(() => {
  SplashScreen.preventAutoHideAsync();

  async function prepare() {
    await SplashScreen.preventAutoHideAsync();
  }

  prepare().then(() => {
    SplashScreen.hideAsync();
  });
}, []);



const [fontsLoaded] = useFonts({
  SpaceMono: require("../assets/fonts/SpaceMono.ttf"),
  Inter_600SemiBold,
});



const onLayout = useCallback(async() => {
  if(fontsLoaded){
      await SplashScreen.hideAsync();
  }
}, [fontsLoaded])

if (!fontsLoaded) return null;



  const amonos = () => {
    router.push('/(tabs)/home');
  };
  const amonos2 = () => {
    router.push('/inicio');
  };

  return (
    <View onLayout={onLayout} style={styles.loginContainer}>
      <StatusBar style="light" backgroundColor="#121532" />
      <Stack.Screen options={{ headerShown: false }} />
      <LinearGradient
        colors={['#121532', '#203457', '#6c8294', '#506275', '#3483b0']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.box}
      >
        <View style={{ width: 100, height: 100, backgroundColor: "#264a71", position: "absolute" }}></View>
        <ScrollView contentContainerStyle={{ flex: 1, width: "100%", height: "100%" }}>
          <View style={styles.labelT}>
            <Text style={styles.title}>Iniciar Sesión</Text>
          </View>
          <BlurView experimentalBlurMethod="dimezisBlurView" intensity={60} style={styles.blurContainer}>
            <View style={styles.mainContainer}>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.inputText}
                  placeholder="Email"
                  onChangeText={setEmail}
                  value={email}
                  autoCapitalize="none"
                  keyboardType="email-address"
                />
                <TextInput
                  style={styles.inputText}
                  placeholder="Contraseña"
                  onChangeText={setPassword}
                  value={password}
                  secureTextEntry
                />
                {error ? <Text style={styles.errorText}>{error}</Text> : null}
                <TouchableOpacity onPress={amonos2}>
                  <Text style={styles.loginButton}>
                    Iniciar<EventIcon colorI={"#fff"} icon="arrowright" size={24} />
                  </Text>
                </TouchableOpacity>
              </View>
              <Pressable style={styles.noAccount}>
                <Text style={styles.noAccount}>I don't know my password</Text>
              </Pressable>
            </View>
          </BlurView>
        </ScrollView>
      </LinearGradient>
    </View>
  )
}

const styles = StyleSheet.create({
  blurContainer: {
    borderRadius: 15,
    overflow: 'hidden',
    width: 300,
    height: 400,
  },
  title: {
    fontSize: 38,
    fontWeight: "bold",
    textAlign: 'left',
    color: "white",
  },
  mainContainer: {
    justifyContent: "center",
    width: "100%",
    height: "100%",
    alignSelf: "center",
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "#fff",
    shadowColor: "black",
    shadowOffset: {
      width: 1,
      height: 5
    },
    shadowRadius: 10,
    shadowOpacity: 0.8,
  },
  box: {
    width: "100%",
    height: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loginContainer: {
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: "center",
    flex: 1,
  },
  labelT: {
    marginTop: 85,
    marginBottom: 40,
    textAlign: "left",
  },
  inputContainer: {
    alignItems: "center"
  },
  inputText: {
    justifyContent: "center",
    width: 250,
    height: 40,
    borderColor: "#fff",
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#ffffff50",
    marginBottom: 20,
  },
  noAccount: {
    marginTop: 50,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 6,
  },
  loginButton: {
    width: 250,
    height: 40,
    borderRadius: 10,
    backgroundColor: "#82d8e980",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    alignSelf: "center",
    fontSize: 28,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#fff",
    color: "#fff",
    fontWeight: "500",
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginBottom: 10,
  },
});

