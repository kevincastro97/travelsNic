import Headerd from './../utilities/containers/headerContainer'

import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ToastAndroid,
} from "react-native";
import MapView, { Marker } from 'react-native-maps';

const Map = ({ state, location }) => {
    return (
        <View>
            <MapView
                style={styles.mapContainer}
                initialRegion={{
                    latitude: 12.1062900,
                    longitude: -85.3645200,
                    latitudeDelta: 0.0055,
                    longitudeDelta: 0.0055,
                }}
            >
                {
                    state === 2 ? <Marker coordinate={ location } title={'Yo'} /> : null
                }
                <Marker
                    coordinate={{ latitude: 12.1062900, longitude: -85.3645200, }}
                    title={'Yo'}
                />
            </MapView>
        </View>
    )
};

const styles = StyleSheet.create({
    mapContainer: {
        backgroundColor: '#FFF',
        flex: 1,
        minHeight: '100%',
        minWidth: '100%',
    },
});

export default Map;

/*import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'; 
import React from 'react';
import {
    StyleSheet,
    View
} from 'react-native';

const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      height: '100%',
      width: '100%',
      alignItems: 'center',
    },
    map: {
      ...StyleSheet.absoluteFillObject,
      marginTop: 110
    },
   });

   export default () => (
     
    <View style={styles.container}>

      <Headerd/>
    
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        region={{
            latitude: 12.1062900,
            longitude: -85.3645200,
            latitudeDelta: 0.0055,
            longitudeDelta: 0.0055,
        }}
      >
      </MapView>
    </View>
 );*/