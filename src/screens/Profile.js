import React, { useEffect, useState } from 'react';
import { View, Text, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Profile = () => {
const [profileData, setProfileData] = useState('');

  useEffect(() => {

    fetchProfileData();
  }, []);

  const fetchProfileData = async () => {
    try {
    const profileJSON = await AsyncStorage.getItem('token');
    Alert.alert(profileJSON)
    setProfileData(profileJSON)
    } catch (error) {
    console.error('Error fetching profile data from AsyncStorage:', error);
    }
  };
  return (
    <View>
    <Text style={{fontSize:12,fontWeight:'bold', color:'white', marginLeft:10}}>{profileData}</Text>
    </View>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 2,
//     // alignItems: 'center',
//     // justifyContent: 'center',
//     padding: 16,    
//   },
//   email: {
//     fontSize: 12,
//     fontWeight: 'bold',
//     marginBottom: 10,
//     color:'white',
//   },
// });

export default Profile;
