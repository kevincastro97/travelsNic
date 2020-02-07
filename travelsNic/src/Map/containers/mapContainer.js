import React, {Component} from 'react';

import Map from './../components/map';

import {
    getCoordinateMap,
} from './../../../lib/data/map-data';

import SelectBayForMap from './select-bay-for-map-container';

import Geolocation from '@react-native-community/geolocation';
import {
    getUserById,
} from './../../../lib/data/user-data';

class MapContainer extends Component{

    constructor(props){
        super(props);

        const user = props.navigation.dangerouslyGetParent().getParam('user', null);

        console.log("User in map: ", user);

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
            user: user,
            userData: null,
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
            userData,
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
                userData={userData}
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
        this.getUserLogged();
    }

    getUserLogged = () => {
        const { user } = this.state;
        getUserById(user.uid)
        .then(userData => {
            this.setState({
                userData: userData,
            });
        })
        .catch(error => {
            console.log(error);
        });
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