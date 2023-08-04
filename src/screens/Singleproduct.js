import { View, Text, Image, TouchableOpacity, FlatList, Dimensions } from 'react-native';
import React from 'react';

const { height, width } = Dimensions.get('window');

export default function SingleProduct({ route, navigation }) {
  const Singletolanding = () => {
    navigation.pop();
  };

  return (
    <View>
      <TouchableOpacity onPress={Singletolanding}>
        <Text>Back to Landing</Text>
        <Text>{route.params.data.title}</Text>
      </TouchableOpacity>

      <View style={{ padding: 20 }}>
        <Image style={{ width: '100%', height: 200, shadowOffset: { width: 5, height: 5 }, shadowColor: '#000000', shadowOpacity: 1}} source={{ uri: route.params.data.images['2'] }} />
      </View>

      <View style={{ width: '100%', alignItems: 'center', justifyContent: 'space-evenly' }}>
        <FlatList
          data={route.params.data.images}
          showsHorizontalScrollIndicator={false}
          horizontal
          pagingEnabled
          renderItem={({ item, index }) => (
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Image style={{width:200, height: 50, margin: 7 }} source={{ uri: item }} />
            </View>
          )}
          // keyExtractor={(item, index) => index.toString()}
        />
      </View>

      <Text>{route.params.data.description}</Text>
      <Text>{route.params.data.price}</Text>
      <Image source={{ uri: route.params.data.thumbnail }} />
      <Text>Single Product</Text>
    </View>
  );
}
