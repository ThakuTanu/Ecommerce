import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  TextInput
} from 'react-native';
import React, {useEffect, useState} from 'react';
import { Shadow } from 'react-native-shadow-2';
import Header from '../components/Header';
// import { Shadow } from 'react-native-shadow-2';

const url = 'https://fakestoreapi.com/products';

export default function Productdetail({navigation, route}) {
  const Backtolanding = () => {
    navigation.pop();
  };
  // console.log(route.params.name) // data access
  const [data, setData] = useState([]);
  const [addtoCart, setAddtocart] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [crossdata, setCrossdata] = useState('');

  useEffect(() => {
    fetch(url)
      .then(resp => resp.json())
      .then(data => setData(data))
      //  .then((data)=> console.log('API Testing',data) )
      .catch(error => console.error(error));
  }, []);

  const addtocart = () => {
    navigation.navigate('Addtocart', {
      addtoCart,
      remove: id => {
        console.log(id, 'navigate');
        Removeitemformcart(id);
      },
    });
  };

  const Addproduct = item => {
    setAddtocart(pre => [...pre, {...item, qty: 1}]);
    console.log(item);
  };
  // code for search product from product list
  const Searchhandler = event => {
    setCrossdata(event);
    console.log(event, 'product search');
    const res = data.filter(item =>
      item.title.toLowerCase().includes(event.toLowerCase()),
    );
    console.log(res, 'data');
    setFilterData(res);
  };

  const removehandler = () => {
    setCrossdata('');
  };

  // const Removeitemformcart=(id)=>{
  //     console.log(id,'addto')
  //     setAddtocart((pre)=>pre.filter((pro)=>pro.id !== id))

  //     console.log(addtoCart,'addto')
  // }
  return (
    <>
    
    <View>
      
      <TouchableOpacity onPress={Backtolanding}>
        <Text>back to Landing</Text>
      </TouchableOpacity>
      <View style={{padding:10}}>
        <TextInput
          value={crossdata}
          placeholder="Search"
          onChangeText={Searchhandler}
          style={{
            padding: 10,
            flexDirection: 'row',
            backgroundColor: '#ffffff',
            borderRadius: 15,
            borderColor:'#ae40b1',
            borderWidth:2,
            alignItems: 'center',
            elevation: 20,
          }}
        />
        <View style={{position: 'absolute', right: 15, top: 10}}>
          <TouchableOpacity onPress={removehandler}>
            <Text style={{padding:7,fontWeight:"bold",borderRadius:10,fontSize:25,color:"#ae40b1"}}>{crossdata.length ? 'X' : null}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity onPress={addtocart}>
        <Text style={{textAlign: 'right'}}>
          Cart {`(${addtoCart?.length})`}
        </Text>
      </TouchableOpacity>

      <FlatList
        data={filterData.length ? filterData : data}
        numColumns={2}
        renderItem={({item, index}) => (
          <TouchableOpacity
            style={{
              width: '50%',
              marginLeft: 10,
              marginTop: 15,
              marginBottom: 20,
              justifyContent: 'center',
              alignContent: 'center',
              flex: 1,
            }}>
            <View style={{borderColor:"#eae9f5", borderWidth:5, padding:5,shadowColor:"#ae40b1",shadowOffset: {width: 10, height: 10}, shadowRadius:10}}>
              <Image
                source={{uri: item.image}}
                style={{width: 50, height: 90}}
              />
              <Text style={{color:"#000000"}}>{item.title}</Text>
              <Text style={{color:"#000000",fontWeight:"bold"}}>{item.category}</Text>
              <Text style={{color:"#ae40b1",fontWeight:"bold"}}>${item.price}</Text>
              <TouchableOpacity
                style={{
                  backgroundColor: '#ae40b1',
                  width: '50%',
                  padding: 5,
                  borderRadius: 5,
                }}
             
                onPress={() => Addproduct(item)}>
               <Text style={{color: 'white'}}>Add to cart</Text>
              </TouchableOpacity>
            </View>

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
    </>
  );
}
