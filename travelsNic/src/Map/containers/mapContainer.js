import React, {Component} from 'react';

import Map from './../components/map';

class MapContainer extends Component{

    render(){

        return(
            <Map/>
        );

    }
}

export default MapContainer;
/*
import React, { Component } from 'react'
import { connect } from 'react-redux'

import Map from './../components/map';

import {
    requestPosition,
    location,
    error,
} from './../../state/actions/nearByStopsAction'

import {
    ToastAndroid
} from 'react-native'

class NearByStopsContainer extends Component {

    render() {

        return (
            <Map
                state= { this.props.state }
                location={ this.props.location }
            />
        );

    }

    componentDidMount() {
        navigator.geolocation.requestAuthorization();
        this.currentWatchPosition = navigator.geolocation.getCurrentPosition((position) => {
            ToastAndroid.show("Latitude: " + position.latitude, ToastAndroid.LONG);
            this.props.location(
                position.coords.latitude,
                position.coords.longitude,
            );
        }, (error) => {
            ToastAndroid.show(error.message, ToastAndroid.LONG);
        },
        {
            enableHighAccuracy: true,
            timeout: 20000,
            maximumAge: 1000,
            distanceFilter: 10
        });
    }

    componentWillUnmount() {
        navigator.geolocation.clearWatch(this.currentWatchPosition);
    }

}

const mapStateToProps = (newState, props) => {

    let { nearByStops } = newState;

    let { latitude, longitude, state } = nearByStops;

    let location = null;

    if(latitude && longitude) {
        location = {
            latitude,
            longitude,
        };
    } 

    return {
        state: state ? state : 1,
        location
    };

};

const mapDispatchToProps = (dispatch) => ({
    requestPosition: () => dispatch(requestPosition()),
    location: (latitude, longitude) => dispatch(location(latitude, longitude)),
    error: () => dispatch(error()),
});

export default connect(mapStateToProps, mapDispatchToProps)( NearByStopsContainer);*/