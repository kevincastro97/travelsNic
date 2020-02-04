import React, {Component} from 'react';

import {
    addOrdinary
} from './../../.././../../lib/data/addOrdinaryBusRegistration'

import RegistryBusOrdinary from './../components/registryBusOrdinary';

class RegistryBusOrdinaryContainer extends Component {

    constructor(props){
        super(props);

        this.state = {
            name: '',
            dueño: ''
        }
    }

    onChangeName = (name) =>{
        this.setState({
            name: name
        })
    }

    onChangeDueño = (dueño) =>{
        this.setState({
            dueño: dueño
        })
    }

    miEventoGuardar = () =>{

        const { name, dueño } = this.state

        addOrdinary({
            name: name,
            dueño: dueño
        })

    }

    render(){

        const { name, dueño } = this.state;

        return(
            <RegistryBusOrdinary/>
        );
    }
}

export default RegistryBusOrdinaryContainer;