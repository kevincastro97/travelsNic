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
        }
    }

    render(){

        const  {data} = this.state

        return(
            <Map
                //data = {data}
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
        .then((CoordinateMapArray) => {

            console.log(CoordinateMapArray);
            
            this.setState({
                loadingState: 'cargado',
                data: CoordinateMapArray,
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