import React, {Component} from 'react';

import Map from './../components/map';

import {
    getCoordinateMap,
} from './../../../lib/data/map-data';

import SelectBayForMap from './select-bay-for-map-container';

import Geolocation from '@react-native-community/geolocation';

class MapContainer extends Component{

    constructor(props){
        super(props);

        this.state = {
            loadingState: 'cargando',
            selectOrigin: false,
            originId: null,
            originCoor: null,
            origin: '',
            selectDestination: false,
            destinationId: null,
            destinationCoor: null,
            destination: '',
            currentPosition: null,
            data:[],
        }
    }

    render(){

        const  {
            data,
            selectOrigin,
            originId,
            origin,
            originCoor,
            selectDestination,
            destinationId,
            destination,
            destinationCoor,
            currentPosition,
        } = this.state

        if(selectOrigin)
        {
            return (
                <SelectBayForMap
                    onBayItemClick={this.onBaySelectOrigin}
                />
            );
        }

        if(selectDestination)
        {
            return (
                <SelectBayForMap
                    onBayItemClick={this.onBaySelectDestination}
                />
            );
        }

        return(
            <Map
                onSelectOrigin={this.handleSelectOrigin}
                originId={originId}
                origin={origin}
                originCoor={originCoor}
                onSelectDestination={this.handleSelectDestination}
                destinationId={destinationId}
                destination={destination}
                destinationCoor={destinationCoor}
                currentPosition={currentPosition}
                data = {data}
                onPressLocation={this.handlePressLocation}
            />
        );

    }

    handleSelectOrigin = () => this.setState({ selectOrigin: true, });

    handleSelectDestination = () => this.setState({ selectDestination: true, });

    onBaySelectOrigin = (origin, coor, originId) => {
        this.setState({
            origin: origin,
            originCoor: coor,
            originId: originId,
            selectOrigin: false,
        });
    };
    onBaySelectDestination = (destination, coor, destinationId) => {
        this.setState({
            destination: destination,
            destinationCoor: coor,
            destinationId: destinationId,
            selectDestination: false,
        });
    };

    componentDidMount() {
        this.loadCoordinateMapData();
        this.getWatchPosition();
    }

    getCurrentPosition = () => {
        Geolocation.getCurrentPosition(position => {
            console.log(position);
            this.setState({
                currentPosition: {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                },
            });
        });
    };

    handlePressLocation = (bayData) => {
        this.props.navigation.navigate('MapDetail', { bayData: bayData, });
    };

    getWatchPosition = () => {
        console.log("getWatchPosition");
        this.watchId = Geolocation.watchPosition(
            position => {
                console.log("Current Position:");
                console.log(position);
                this.setState({
                    currentPosition: {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                    }
                });
            },
            error => {
                console.log(error);
            },
            {
                enableHighAccuracy: true,
                timeout: 1000,
                maximumAge: 0,
                distanceFilter: 3,
            }
        );
    };

    loadCoordinateMapData = () => {

        this.setState({
            loadingState: 'cargando',
        });

        getCoordinateMap()
        .then((coordinateMapArreglo) => {
            
            this.setState({
                loadingState: 'cargado',
                data: coordinateMapArreglo,
            });

        })
        .catch((error) => {
            
            this.setState({
                loadingState: 'error',
                error: error,
            });
            
        });

    };

}

export default MapContainer;