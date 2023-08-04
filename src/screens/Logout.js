import { View, Text } from 'react-native'
import React from 'react'

const Logout = async () => {
    Alert.alert('demo')
    await AsyncStorage.removeItem('token')
    setState({
      isloggedIn: false
    })

  }
  export default Logout;