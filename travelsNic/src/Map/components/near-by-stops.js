import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ToastAndroid,
} from "react-native";
import MapView, { Marker } from 'react-native-maps';

import Headerd from './../utilities/containers/headerContainer'

const NearByStops = ({ state, location }) => {
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
                {
                    state === 2 ? <Marker coordinate={ location } title={'Terminal Mayales'} /> : null,
                    state === 2 ? <Marker coordinate={ location } title={'Bahia los Mormones'} /> : null,
                    state === 2 ? <Marker coordinate={ location } title={'Bahia Hospital la Asuncion'} /> : null,
                    state === 2 ? <Marker coordinate={ location } title={'Bahia el Mamon'} /> : null,
                    state === 2 ? <Marker coordinate={ location } title={'Bahia la Esso'} /> : null,
                    state === 2 ? <Marker coordinate={ location } title={'Bahia Petronic'} /> : null
                }

                <Marker
                    coordinate={{ latitude: 12.091926, longitude: -85.360862, }}
                    title={'Terminal Mayales'}
                    image = {require('./../../assets/ba.png')}
                />
                <Marker
                    coordinate={{ latitude: 12.094056, longitude: -85.361666, }}
                    title={'Bahia los Mormones'}
                    image = {require('./../../assets/ba.png')}
                />
                <Marker
                    coordinate={{ latitude: 12.097257, longitude: -85.364296, }}
                    title={'Bahia Hospital la Asuncion'}
                    image = {require('./../../assets/ba.png')}
                />
                <Marker
                    coordinate={{ latitude: 12.105055, longitude: -85.367955, }}
                    title={'Bahia el Mamon'}
                    image = {require('./../../assets/ba.png')}
                />
                <Marker
                    coordinate={{ latitude: 12.108326, longitude: -85.370836, }}
                    title={'Bahia la Esso'}
                    image = {require('./../../assets/ba.png')}
                />
                <Marker
                    coordinate={{ latitude: 12.111992, longitude: -85.372236, }}
                    title={'Bahia Petronic'}
                    image = {require('./../../assets/ba.png')}
                />
                <Marker
                    coordinate={{ latitude: 12.129401, longitude: -85.407271, }}
                    title={'Bahia las Lajitas'}
                    image = {require('./../../assets/ba.png')}
                />
                <Marker
                    coordinate={{ latitude: 12.133317, longitude: -85.462992, }}
                    title={'Bahia San Esteban'}
                    image = {require('./../../assets/ba.png')}
                />
                <Marker
                    coordinate={{ latitude: 12.133355, longitude: -85.444007, }}
                    title={'Matadero'}
                    image = {require('./../../assets/ba.png')}
                />

                <Marker
                    coordinate={{ latitude: 12.137636, longitude: -85.477588, }}
                    title={'Puesto de Sandias'}
                    image = {require('./../../assets/sandia.png')}
                />
                <Marker
                    coordinate={{ latitude: 12.145230, longitude: -85.491560, }}
                    title={'Bahia San Nicolas'}
                    image = {require('./../../assets/ba.png')}
                />
                <Marker
                    coordinate={{ latitude: 12.153245, longitude: -85.513368, }}
                    title={'Bahia Cuisala'}
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