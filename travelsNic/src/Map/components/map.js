import React from 'react';
import {
    View,
    StyleSheet,
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
                <Marker
                    coordinate={{ latitude: 12.091926, longitude: -85.360862, }}
                    title={'Terminal Mayales'}
                    image = {require('./../../assets/ba.png')}
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

export default NearByStops;

