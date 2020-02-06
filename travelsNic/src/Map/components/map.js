import React from 'react';
import {
    View,
    StyleSheet,
} from "react-native";
import MapView, { Marker, } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

import Headerd from './../utilities/containers/headerContainer';

const GOOGLE_MAPS_APIKEY = 'AIzaSyCUv--tDMy5XDs2289A2mv7S_KRgf6zuPE';

const NearByStops = (props) => {

    const {
        data,
        onSelectOrigin,
        originId,
        origin,
        originCoor,
        onSelectDestination,
        destinationId,
        destination,
        destinationCoor,
        currentPosition,
        onPressLocation,
    } = props;

    let initialLatitude = 12.1062900;
    let initialLongitude = -85.3645200;
    if(currentPosition) {
        initialLatitude = currentPosition.latitude;
        initialLongitude = currentPosition.longitude;
    }
    else if(originCoor) {
        initialLatitude = originCoor.latitude;
        initialLongitude = originCoor.longitude;
    }

    const initialRegion = {
        latitude: initialLatitude,
        longitude: initialLongitude,
        latitudeDelta: 0.0055,
        longitudeDelta: 0.0055,
    };

    return (
        <View>

            <Headerd
                onSelectOrigin={onSelectOrigin}
                origin={origin}
                onSelectDestination={onSelectDestination}
                destination={destination}
            />

            <MapView
                style={styles.mapContainer}
                initialRegion={initialRegion}
            >

                {data.map((marker, i) => (
                    <Marker
                        key={i}
                        coordinate={marker.coordinate}
                        title={marker.title}
                        image = {marker.icon}
                        onPress={() => {
                            console.log("OnPress on Marker");
                            onPressLocation(marker);
                        }}
                    />
                ))}

                {originCoor && destinationCoor && (
                    <MapViewDirections
                        origin={originCoor}
                        destination={destinationCoor}
                        apikey={GOOGLE_MAPS_APIKEY}
                        strokeWidth={4}
                        strokeColor={'pink'}
                    />
                )}

                {currentPosition && (
                    <Marker
                        coordinate={currentPosition}
                        title={'Yo'}
                        image={require('./../../assets/i-am-here.png')}
                    />
                )}

                {originCoor && currentPosition && (
                    <>
                        <MapViewDirections
                            origin={currentPosition}
                            destination={originCoor}
                            apikey={GOOGLE_MAPS_APIKEY}
                            strokeWidth={8}
                            strokeColor={'green'}
                            mode={'WALKING'}
                            resetOnChange={false}
                        />
                    </>
                )}
                
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

