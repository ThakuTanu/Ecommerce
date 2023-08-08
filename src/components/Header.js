import React from 'react';
import { View, Text, TouchableOpacity, TextInput,Image,FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Landing from '../screens/Landing';
import Profile from '../screens/Profile';

const Header = () => {
  const navigation = useNavigation();
  

  const navigateToLanding = () => {
    navigation.navigate('Landing');
  };
  
  const openDrawer = () => {
    navigation.openDrawer();
  };

  return (
    <View
      style={{
        backgroundColor: '#ae40b1',
        flex: 0.15,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        borderBottomLeftRadius:5,
        borderBottomRightRadius:5,
        flexDirection:'row',
      }}
    >
      
      {/* <TouchableOpacity onPress={navigateToLanding}>
        <Text style={{ color: 'white', fontSize: 18 }}>Back</Text>
      </TouchableOpacity> */}
      
      <TouchableOpacity onPress={openDrawer}>
        <Image source={require("../assests/Baricon.jpg")} 
      style={{ width:30, height:30}} />
      </TouchableOpacity>
     <TouchableOpacity onPress={()=>navigation.navigate('Pdetail')} style={{width:'65%', height:40, backgroundColor:'#ffffff', borderRadius:5, alignItems:'center',padding:10, margin:8, flexDirection:'row'}}>
     <Image source={require("../assests/search_icon.png")} style={{width:20, height:20}}/>
      <Text>Search</Text>
      {/* <TextInput
        placeholder="Search"
        style={{
          flex: 1,
          marginLeft: 10,
          backgroundColor: 'white',
          height: 40,
          borderRadius: 20,
          paddingHorizontal: 15,
          // width:'100%',
        }}
      /> */}
      </TouchableOpacity>
      <View style={{alignItems:"flex-end", justifyContent:"flex-end"}}><Profile/></View>
    </View>
  );
};
export default Header;
