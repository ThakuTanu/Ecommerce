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
import Header from '../components/Header';
// import { useDispatch, useSelector } from 'react-redux';
// import { updateName } from '../Redux/Reducer';
// import Productrapo from '../Services/ProductRapo';

const adUnitId = __DEV__
  ? TestIds.BANNER
  : 'ca-app-pub-xxxxxxxxxxxxx/yyyyyyyyyyyyyy';
const Separator = () => <View style={styles.separator} />;

// const url = 'https://jsonplaceholder.typicode.com/posts';
const url='https://dummyjson.com/products';

const Landing = ({navigation}) => {
  // const counter=useSelector((state)=>state.app)
  // console.log(counter,'dummy')
  const {logout, demo, temp, setTemp} = React.useContext(AuthContext); //Hooks data access krra hai authcontext se
  const [data, setData] = useState([]);


  useEffect(() => {
    fetch(url)
      .then(resp => resp.json())
      .then(data => setData(data.products))
      // .then((data)=> console.log('API Testing',data) )
      .catch(error => console.error(error));
  }, []);

  // console.log(data.products);

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
  const navigatetoheader = () => {
    navigation.navigate('Header');
  };

  const searchanything = () => {
    navigation.navigate('Demoheader');
  };

  const navigatetoredux=()=>{
    navigation.navigate('Reduxtool')
  }
  const SingleProduct=(item)=>{
    navigation.navigate('Singleproduct',{data:item});
  }
  const Map=()=>{
    navigation.navigate('Mapnavigate')
  }
  // const dispatch=useDispatch();
  // const changehandlerusingredux=async()=>{
  //   console.log("cc")
  //   Productrapo.getProducts()



  // }
  return (
    <>
    <Header/>
      <BannerAd
        unitId={adUnitId}
        size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
        requestOptions={{
          requestNonPersonalizedAdsOnly: true,
        }}
      />
      {/* <TouchableOpacity onPress={changehandlerusingredux}><Text>call by redux</Text></TouchableOpacity>
      <View><Text>{counter.name}</Text></View> */}
         {/* <TouchableOpacity onPress={()=>navigatetoredux()}>
        <Text
          style={{
            textAlign: 'right',
            color: 'blue',
            textDecorationStyle: 'dotted',
          }}>
          ReduxToolkit
        </Text>
      </TouchableOpacity> */}
      <TouchableOpacity onPress={()=>Map()}><Text>Map</Text></TouchableOpacity>
      <TouchableOpacity onPress={()=>searchanything()}>
        <Text
          style={{
            textAlign: 'right',
            color: 'blue',
            textDecorationStyle: 'dotted',
          }}>
          Demo Header
        </Text>
        </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigatetoheader()}>
        <Text
          style={{
            textAlign: 'right',
            color: 'blue',
            textDecorationStyle: 'dotted',
          }}>
          header
        </Text>
      </TouchableOpacity>
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
              <TouchableOpacity onPress={()=>SingleProduct(item)}
                style={{
                  width: '100%',
                  marginTop: 15,
                  marginBottom: 20,
                }}>
                <View style={{backgroundColor: '#227585', padding: 20}}>
                  <View><Image source={{ uri: item.images['1'] }} style={{ width: '100%', height:200 }} /></View>
                  <View>

                    {/* use of map function*/}
      {/* {item.images.map((item1) => {
        console.log(item1);
        return (
          <View>
            <Image style={{width:50, height:50}} source={{uri:item1.images}}/>
          </View>
        );
      })} */}
    </View>
                  <Text
                    style={{
                      color: 'white',
                      fontSize: 20,
                      fontFamily: 'Roboto-Medium',
                      fontWeight: 500,
                    }}>
                    {item.title}
                  </Text>
                  {/* <Separator /> */}
                  </View>
                  <View style={{backgroundColor: '#aa18ea', padding: 20}}><Text style={{color:"white"}}>{item.description}</Text></View>
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
