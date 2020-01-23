import React from 'react';
import {
    View,
    StyleSheet,
    Text
} from "react-native";
import MapView, { Marker } from 'react-native-maps';

import Headerd from './../utilities/containers/headerContainer'

const NearByStops = (props) => {

    const { data } = props;

    return (
        <View>

            <Headerd/>

            <MapView
                style={styles.mapContainer}
                initialRegion={{
                    latitude: 12.1062900,
                    longitude: -85.3645200,
                    latitudeDelta: 0.0055,
                    longitudeDelta: 0.0055,
                }}
            >

                {data.map((marker, i) => (
                    <Marker
                        key={i}
                        coordinate={marker.coordinate}
                        title={marker.title}
                        image = {marker.icon} 
                    />
                ))}
                
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

export default NearByStops;

