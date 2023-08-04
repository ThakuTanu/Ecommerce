import { View, Text, Image, TouchableOpacity, FlatList, Platform, StyleSheet } from 'react-native';
import React from 'react';

export default function SingleProduct({ route, navigation }) {
  const Singletolanding = () => {
    navigation.pop();
  };

  return (
    <View>
      <TouchableOpacity onPress={Singletolanding}>
        <Text>back to Landing</Text>
        <Text>{route.params.data.title}</Text>
      </TouchableOpacity>
      <View style={styles.imageContainer}>
        <Image style={styles.mainImage} source={{ uri: route.params.data.images['2'] }} />
      </View>

      <View style={{ width: '100%', alignItems: 'center', justifyContent: 'space-evenly' }}>
        <FlatList
          data={route.params.data.images}
          horizontal
          renderItem={({ item, index }) => (
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
              <Image style={styles.thumbnail} source={{ uri: item }} />
            </View>
          )}
        />
      </View>

      <Text>{route.params.data.description}</Text>
      <Text>{route.params.data.price}</Text>
      <Image source={{ uri: route.params.data.thumbnail }} />
      <Text>Single Product</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    padding: 20,
    backgroundColor: 'yellow',
    ...Platform.select({
      ios: {
        shadowOffset: { width: 0, height: 2 },
        shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  mainImage: {
    width: '100%',
    height: 200,
  },
  thumbnail: {
    width: 60,
    height: 50,
    margin: 7,
  },
});
