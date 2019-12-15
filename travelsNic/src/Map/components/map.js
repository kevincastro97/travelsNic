/*import React from 'react'

import Headerd from './../utilities/containers/headerContainer'

import {
    View,
    Image
} from 'react-native'

const Map =(props)=>{
    
    return(
        <View>

            <Headerd/>

            <Image
                source = {require('./../../assets/mapa.png')}
            />
        </View>
    );
}

export default Map;*/

import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'; 
import React from 'react';
import {
    StyleSheet,
    View
} from 'react-native';

const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      height: 400,
      width: 400,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
   });

   export default () => (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
      >
      </MapView>
    </View>
 );