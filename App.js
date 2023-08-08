import React, { useEffect } from "react";
import { View, Text, ScrollView, StyleSheet, Image, Alert } from "react-native";
import SplashScreen from 'react-native-splash-screen';
import Landing from "./src/screens/Landing";
// import Demo from "./src/screens/Demo";
import Bottomnavigation from "./src/screens/Bottomnavigation";
import 'react-native-gesture-handler'
import LaunchSplash from "./src/screens/LaunchSplash";
import Register from "./src/screens/Login";
import Route from './Route'
import { ContextProvider } from "./src/context/Authcontext";
import messaging from'@react-native-firebase/messaging';

// import { Provider } from 'react-redux'
// import store from "./src/Redux/Store";
// import { Store } from "./src/screens/store";
const App = () => {

  useEffect(()=>{
    getDevicetoken();
  }, []);
const getDevicetoken= async()=>{
  let token=await messaging().getToken();
  console.log(token);

}
useEffect(() => {
  const unsubscribe = messaging().onMessage(async remoteMessage => {
    Alert.alert('A new FCM message arrived from foregriound mode'
    , JSON.stringify(remoteMessage));
  });

  return unsubscribe;
}, []);

  return (
   <ContextProvider>
      <Route/>

      </ContextProvider>
  )
}
const styles = StyleSheet.create({
  textstyle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20
  }
});

export default App;