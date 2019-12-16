import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'; 
import React from 'react';
import {
    StyleSheet,
    View
} from 'react-native';

import Headerd from './../utilities/containers/headerContainer'

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

const Maps = () => (
     
    <View style={styles.container}>

      <Headerd/>
    
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        region={{
            latitude: 12.105846,
            longitude: -85.365298,
            latitudeDelta: 0.0055,
            longitudeDelta: 0.0055,
        }}
      >
      </MapView>
    </View>
 );

 export default Maps