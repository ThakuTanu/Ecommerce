import React, { useState, useContext, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity, Alert } from 'react-native';
import { AuthContext } from '../context/Authcontext';
import { GoogleSignin, GoogleSigninButton, statusCodes } from 'react-native-google-signin';
import {LoginButton,AccessToken,GraphRequest,GraphRequestManager} from 'react-native-fbsdk';

const Separator = () => <View style={styles.separator} />;

const Login = ({ navigation }) => {
  const { Login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = () => {
    Login(password, email);
  };

  useEffect(() => {
    // Initialize GoogleSignin
    GoogleSignin.configure({
      webClientId: '893528037623-7f0nvoadsud413f16rqaknupduk3g6bh.apps.googleusercontent.com',
      offlineAccess: true,
      hostedDomain: '',
      forceConsentPrompt: true,
    });
  }, []);

  const signInViaGoogle = async () => {
    try {
      await GoogleSignin.hasPlayServices({
        showPlayServicesUpdateDialog: true,
      });
      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo); // You can handle the user info as per your requirement
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        Alert.alert('User Cancelled the Login Flow');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        Alert.alert('Signing In');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        Alert.alert('Play Services Not Available or Outdated');
      } else {
        Alert.alert(error.message);
      }
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 30 }}>
      <View style={{ alignItems: "center" }}>
        <Image source={require("../assests/login.jpg")} style={{ width: '100%', height: 300, transform: [{ rotate: '-5deg' }] }} />
      </View>
      <Separator
       />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={(value) => setEmail(value)}
        style={{ color: "black", borderColor: "black", borderWidth: 1, borderRadius: 5, margin: 10 }}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={(value) => setPassword(value)}
        secureTextEntry={true}
        style={{ color: "black", borderColor: "black", borderWidth: 1, borderRadius: 5, margin: 10 }}
      />
      <Separator />
      <View style={{ width: "90%", marginLeft: 20 }}>
      <TouchableOpacity onPress={loginHandler} style={{ shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84 }}>
        <Text style={{ backgroundColor: "#ae40b1", textAlign: "center", color: "white", fontSize: 15, borderRadius: 5, paddingVertical: 20, shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84 }}>LOGIN</Text>
      </TouchableOpacity>
    </View>

      <Separator /><Separator />
  <View style={{alignItems:"center", justifyContent:"center"}}><Text><GoogleSigninButton
        style={{ width: 200, height: 48 }}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={signInViaGoogle}
        disabled={false}
        
      /></Text></View> 
      
        <Separator />
      <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
        <Text style={{ textAlign: "center" }}>Don't have an account? <Text style={{ textDecorationLine: "underline" }}>SIGNUP</Text></Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  separator: {
    marginVertical: 5,
    // borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default Login;
