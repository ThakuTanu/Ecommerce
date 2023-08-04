import React,{useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import MapViewDirections from 'react-native-maps-directions';

export default function Map({ navigation, route }) {
  const Maptolanding = () => {
    navigation.pop();
  };
  const [initialPosition, setInitialPosition] = React.useState(null);
  const [coordinates, setCoordinates] = useState([]);
  React.useEffect(() => {
    // Get the user's initial position when the component mounts
    Geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        console.log({ latitude, longitude })
        setInitialPosition({ latitude, longitude });
        setCoordinates([{ latitude, longitude }]);
      },
      (error) => console.log('Error getting initial position: ', error),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
     
    );

    // Set up a location listener to continuously update the position
    const watchId = Geolocation.watchPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setInitialPosition({ latitude, longitude });
        setCoordinates((prevCoordinates) => [
          ...prevCoordinates,
          { latitude, longitude }, // Add the new position to the existing coordinates
        ]);
      },
      (error) => console.log('Error updating position: ', error),
      { enableHighAccuracy: true, distanceFilter: 10 }
    );

    // Clean up the location listener when the component unmounts
    return () => Geolocation.clearWatch(watchId);
  }, [initialPosition]);

  const { latitude, longitude } = initialPosition || {
    latitude: 28.424615054470475,
    longitude: 77.10100377417771,
  };

  return (
    <View>
      <TouchableOpacity onPress={() => Maptolanding()} style={{ height: 20 }}>
        <Text>Back to landing</Text>
      </TouchableOpacity>
      <View style={styles.container}>
        <MapView
          style={styles.map}
          zoomTapEnabled={true}
          zoomControlEnabled={true}
          showsUserLocation={true}
          followsUserLocation={true}
          showsMyLocationButton={true}
          pitchEnabled={true}
          showsCompass={true}
          rotateEnabled={true}
          initialRegion={{
            latitude: latitude,
            longitude: longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 1,
          }}
        >
          <Polyline
        coordinates={coordinates}
        strokeColor="#0000FF" // Blue color for the line
        strokeWidth={3}
      />
          <Marker
            coordinate={{
              longitude: longitude,
              latitude: latitude,
            }}
          >
            {/* <Image source={require("../assests/map_maker.jpg")} style={{ width: 50, height: 30, position:'absolute' }} /> */}
          </Marker>
        </MapView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "98%",
    width: "100%",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
