import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import React from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';

export default function Addtocart({navigation, route}) {
  const data = route.params.addtoCart;
  const [add, setData] = React.useState(data);
  const {remove} = route?.params;

  // React.useEffect(() => {
  //     setData(route.params.addtoCart)
  // }, [add])

  const removeHandler = id => {
    // remove(item?.id)
    console.log('remove==>', id, data);
    const filterdata = add?.filter(item => {
      return item?.id != id;
      //console.log("removedatafromcart",item)
    });
    setData(filterdata);
    console.log('datfilter', filterdata);
  };

  const increment = id => {
    const existingitem = add?.filter(item => item?.id === id);
    if (existingitem) {
      console.log(existingitem);
      const updateitem = add?.map(cartitem => {
        if (cartitem?.id === id) {
          return {
            ...cartitem,
            qty: cartitem?.qty + 1,
          };
        }
        return cartitem;
      });
      setData(updateitem);
    }
  };

  const decrement = id => {
    // const existingitem = add?.filter((item) => item?.id === id)

    const updateitem = add?.map(cartitem => {
      if (cartitem?.id === id) {
        return {
          ...cartitem,
          qty: cartitem?.qty - 1,
        };
      }
      return cartitem;
    });
    setData(updateitem);
  };

  const backtoproduct = () => {
    navigation.pop();
  };
  return (
    <View>
      <TouchableOpacity onPress={backtoproduct}>
        <Text>back to Product page </Text>
      </TouchableOpacity>
      <FlatList
        data={add}
        renderItem={({item, index}) => (
          // <TouchableOpacity style={{ width: "100%", marginTop: 15, marginBottom: 20, justifyContent: "center", alignContent: "center", flex: 1 }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
            }}>
            <View style={{width: '15%'}}>
              <Image
                source={{uri: item?.image}}
                style={{width: 40, height: 40}}
                resizeMode="contain"
              />
            </View>
            <View style={{width: '30%'}}>
              <Text>{item?.title}</Text>
            </View>
            {/* <Text>{item.category}</Text> */}
            <View
              style={{
                flexDirection: 'row',
                width: '55%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text>{item?.price}</Text>
              {/* <View style={{ width: "100%", backgroundColor: "red" }}><Text>Quantity</Text></View> */}

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignSelf: 'flex-end',
                  flex: 1,
                }}>
                <TouchableOpacity
                  onPress={() => increment(item?.id)}
                  style={{
                    backgroundColor: '#ae40b1',
                    padding: 10,
                    borderRadius: 5,
                  }}>
                  <Text style={{color: 'white', fontSize: 22}}>+</Text>
                </TouchableOpacity>

                <Text> {item?.qty} </Text>
                <TouchableOpacity
                  onPress={() => decrement(item?.id)}
                  style={{
                    backgroundColor: '#ae40b1',
                    padding: 10,
                    borderRadius: 5,
                  }}>
                  <Text style={{color: 'white', fontSize: 22}}>-</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => removeHandler(item?.id)}
                  style={{
                    backgroundColor: '#ae40b1',
                    marginLeft: 10,
                    padding: 5,
                    borderRadius: 5,
                  }}>
                  <Text style={{color: 'white'}}>Remove Item</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          // </TouchableOpacity>
        )}
      />
      <View style={{alignItems: 'center'}}>
        <TouchableOpacity
          style={{backgroundColor: '#ae40b1', padding: 10, borderRadius: 5}}>
          <Text style={{textAlign: 'center', color: 'white'}}>Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
