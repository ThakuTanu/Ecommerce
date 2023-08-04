import { View, Text, Alert, } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = React.createContext(null)

const initialState = {
  isloggedIn: false,
}
export const ContextProvider = props => {
  console.log("authcontext")
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const [state, setState] = React.useState(initialState) // made to access it anywhere in the app 
  const [temp, setTemp] = React.useState("name")


  const Login = async (email, password) => {
    if (!email || !password) {
      Alert.alert("Email and Password Required");
    } else if (emailRegex.test(email)) {
      Alert.alert("Invalid email");
    } else {
      Alert.alert(password);
      setState({ isloggedIn: true })
      await AsyncStorage.setItem("token",password);

    }
  }
  // new code Added here this code remains logeed in 
  React.useEffect(() => {
    (async () => {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        setState({ isloggedIn: true })
      } else {
        setState({ isloggedIn: false })
      }
    })()
  }, [])
  

  const demo = () => {
    Alert.alert("popup")
  }

  const Signup = (fullname, email, password, repassword) => {
    if (fullname == "" && email == "" && password == "" && repassword == "") {
      Alert.alert("All field are mandatory")
      return
    }

  }
// code for logout 

  const logout = async () => {
    Alert.alert('demo')
    await AsyncStorage.removeItem('token')
    setState({
      isloggedIn: false
    })

  }
  // to chk anyone is logged in or not 
  //   const Login= async ()=>{
  //     await AsyncStorage.setItem('token',"token string ")
  //     setState({
  //       isloggedIn:true
  //     })
  //   }
  return (

    <AuthContext.Provider
      value={{
        state,
        Login,
        Signup,
        logout,
        demo,
        setTemp, temp
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )

}

