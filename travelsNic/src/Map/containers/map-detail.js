import React, { Component } from 'react';

import MapDetail from './../components/map-detail';
import {
    getOrdinaryLines,
} from './../../../lib/data/ordinary-lines-data';

class MapDetailContainer extends Component {
    
    constructor(props) {
        super(props);

        const bayData = this.props.navigation.getParam('bayData', null);

        if(bayData) {
            this.props.navigation.setParams({
                title: bayData.title,
            });
        }

        this.state = {
            ordinaryLines: [],
        };
    }

    render() {

        const { ordinaryLines } = this.state;

        const bayData = this.props.navigation.getParam('bayData', null);

        return (
            <MapDetail
                bayData={bayData}
                ordinaryLines={ordinaryLines}
            />
        );
    }

    componentDidMount() {
        this.setState({
            state: 'cargando',
        });
        getOrdinaryLines()
        .then(data => {
            this.setState({
                state: '',
                ordinaryLines: data,
            });
        })
        .catch(error => {
            console.log(error);
        })
    }

}

export default MapDetailContainer;