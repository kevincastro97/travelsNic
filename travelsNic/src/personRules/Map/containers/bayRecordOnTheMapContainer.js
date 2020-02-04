import React, { Component } from 'react';

import {
    Alert
} from 'react-native';

import {
    addCoordinateMap
} from './../../../../lib/data/addBayRecordOnTheMap'

import RegistryHotelAndRestaurant from './../components/bayRecordOnTheMap';

class RegistryHotelAndRestaurantContainer extends Component{

    constructor(props){
        super(props);

        this.state = {
            title: '',
            icon: '',
            latitude: '',
            longitude: '',

            loadingState: ''
        }
    }

    myOnChangeTitle = (title) =>{
        this.setState({
            title: title,
        })
    }

    myOnChangeIcon = (icon) =>{

        this.setState({
            icon: icon,
        })
    }

    myOnChangeLatitude = (latitude) =>{
        this.setState({
            latitude: latitude,
        })
    }

    myOnChangeLongitude = (longitude) =>{
        this.setState({
            longitude: longitude,
        })
    }

    myEventSave = () =>{

        this.setState({
            loadingState: 'cargando'
        })

        const { 
            title, 
            icon,
            latitude,
            longitude
        } = this.state

        const latitudeData = parseFloat(latitude)
        const longitudeData = parseFloat(longitude)
        
        addCoordinateMap({
            title: title,
            icon: icon,
            coordinate: {
                latitude: latitudeData,
                longitude: longitudeData
            }
        })

        .then(() => {
            this.setState({
                title: '',
                icon: '',
                latitude: '',
                longitude: '',
   
                loadingState: 'guardado',
            })

            Alert.alert("Los datos se agregaron correctamente");
        })
        .catch((error) => {
            this.setState({
                loadingState: 'error',
            })

            Alert.alert("Ocurrio un error al agregar los datos");
        })
    }

    render(){

        const { 
            title, 
            icon,
            latitude,
            longitude,
            loadingState
        } = this.state

        return(
            <RegistryHotelAndRestaurant
                loadingState = { loadingState }
                title = { title }
                myOnChangeTitle = { this.myOnChangeTitle } 
                icon = { icon } 
                myOnChangeIcon = { this.myOnChangeIcon } 
                latitude = { latitude }
                myOnChangeLatitude = { this.myOnChangeLatitude }
                longitude = { longitude }
                myOnChangeLongitude = { this.myOnChangeLongitude }
                myEventSave = { this.myEventSave }
            />
        );
    }
}

export default RegistryHotelAndRestaurantContainer;