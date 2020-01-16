import React, {Component} from 'react';

import Map from './../components/map';

import {
    getCoordinateMap,
} from './../../../lib/data/map-data'; 


class MapContainer extends Component{

    constructor(props){
        super(props);

        this.state = {
            loadingState: 'cargando',
            data:[],

            datos: [
                {
                    lan: {
                        key: 1,
                        latitude: 12.091926, 
                        longitude: -85.360862, 
                    },

                    title: 'klmlkmde',
                    imagen: require('./../../assets/ba.png'),
                },

                {
                    lan: {
                        key: 1,
                        latitude: 12.094056, 
                        longitude: -85.361666, 
                    },

                    title: 'meee',
                    imagen: require('./../../assets/ba.png'),
                }
            ]
        }
    }

    render(){

        const  {data} = this.state

        return(
            <Map
                data = {data}
            />
        );

    }

    componentDidMount() {
        this.loadCoordinateMapData();
    }

    loadCoordinateMapData = () => {

        this.setState({
            loadingState: 'cargando',
        });

        getCoordinateMap()
        .then((coordinateMapArreglo) => {

            console.log(coordinateMapArreglo);
            
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