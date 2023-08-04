import React, {useEffect, useState} from 'react';
import {
  Button,
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  AsyncStorage,
  Alert,
} from 'react-native';
import Bottomnavigation from './Bottomnavigation';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {AuthContext} from '../context/Authcontext';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {BannerAd, BannerAdSize, TestIds} from 'react-native-google-mobile-ads';
const adUnitId = __DEV__
  ? TestIds.BANNER
  : 'ca-app-pub-xxxxxxxxxxxxx/yyyyyyyyyyyyyy';
const Separator = () => <View style={styles.separator} />;

const url = 'https://jsonplaceholder.typicode.com/posts';

const Landing = ({navigation}) => {
  const {logout, demo, temp, setTemp} = React.useContext(AuthContext); //Hooks data access krra hai authcontext se
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then(resp => resp.json())
      .then(data => setData(data))
      // .then((data)=> console.log('API Testing',data) )
      .catch(error => console.error(error));
  }, []);

  console.log(data);

  // const logoutHandler=()=>{
  //   logout()
  // }
  const changname = () => {
    // state cahnge krna
    setTemp('okoders');
  };

  const navigatetoproductdetail = () => {
    navigation.navigate('Pdetail', {name: 'Okoders'});
  };

  return (
    <>
      <BannerAd
        unitId={adUnitId}
        size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
        requestOptions={{
          requestNonPersonalizedAdsOnly: true,
        }}
      />
      <TouchableOpacity onPress={() => logout()}>
        <Text
          style={{
            textAlign: 'right',
            color: 'blue',
            textDecorationStyle: 'dotted',
          }}>
          logout
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigatetoproductdetail()}>
        <Text
          style={{
            textAlign: 'right',
            color: 'blue',
            textDecorationStyle: 'dotted',
          }}>
          Gotopdetail
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => demo()}>
        <Text
          style={{
            textAlign: 'left',
            color: 'blue',
            textDecorationStyle: 'dotted',
          }}>
          testing
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => changname()}>
        <Text
          style={{
            textAlign: 'left',
            color: 'blue',
            textDecorationStyle: 'dotted',
          }}>
          changename
        </Text>
      </TouchableOpacity>
      <Text>{temp}</Text>
      <View style={{flex: 1, justifyContent: 'center', padding:15}}>
        <View>
          <Text style={{color: 'black', fontSize: 20, textAlign: 'center'}}>
            Select Your Interest
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: 'white',
            width: '100%',
            paddingVertical: 20,
          }}>
          {/* <FlatList 
data={data}
numColumns={3}
renderItem={({item})=>(<View style={{backgroundColor:"brown", width:"30%", height:100, marginLeft:10,marginTop:15}}>
     <Image source={item.image} style={{height:300,width:"100%"}}/><Text>dummy</Text> </View>)}/> */}
          <FlatList
            data={data}
            // numColumns={2}
            renderItem={({item, index}) => (
              <TouchableOpacity
                style={{
                  width: '100%',
                  marginTop: 15,
                  marginBottom: 20,
                }}>
                <View style={{backgroundColor: '#227585', padding: 20}}>
                  <Text
                    style={{
                      color: 'white',
                      fontSize: 20,
                      fontFamily: 'Roboto-Medium',
                      fontWeight: 500,
                    }}>
                    {item.title}
                  </Text>
                  <Separator /></View>
                  <View style={{backgroundColor: '#aa1656', padding: 20}}><Text style={{color:"white"}}>{item.body}</Text></View>
                  {/* <Text style={{color: 'white'}}>{item.body}</Text>
                </View> */}

                {/* <Image source={item.image} 
            
                style={{
                  width: "90%",
                  height: 90,
                  borderWidth: 2,
                  resizeMode: 'contain',
                  margin: 8,
                  borderRadius:150/2
                }}
              /> */}
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </>
  );
};
{
  /* <Bottomnavigation /> */
}
const styles = StyleSheet.create({
  separator: {
    marginVertical: 5,
    // borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
export default Landing;
