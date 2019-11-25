import React, {Component} from 'react';

import OrdinaryBusOptionsList from './../components/ordinaryBusOptionsList'

class OrdinaryBusOptionsListContainer extends Component {

    constructor(props){
        super(props)

        this.state = {
            ordinaryLines:[
                {
                    key: '1',
                    image: require('./../../../assets/login/icon.png'),
                    title: 'Transporte el Bendecido',
                    line: 'Juigalpa - Managua',
                    price: 'C$ 50',
                    passengers: '54',
                    departureTime: '5:40 Am',
                    arrivalTime: '6:15 Pm'
                },

                {
                    key: '2',
                    image: require('./../../../assets/login/icon.png'),
                    title: 'Transporte el Bendecido',
                    line: 'Juigalpa - Managua',
                    price: 'C$ 50',
                    passengers: '54',
                    departureTime: '5:40 am',
                    arrivalTime: '6:15 am'
                },

                {
                    key: '3',
                    image: require('./../../../assets/login/icon.png'),
                    title: 'Transporte el Bendecido',
                    line: 'Juigalpa - Managua',
                    price: 'C$ 50',
                    passengers: '54',
                    departureTime: '5:40 am',
                    arrivalTime: '6:15 am'
                },
                
            ]
        }
    }

    render(){

        const {ordinaryLines} = this.state

        return(
            <OrdinaryBusOptionsList
                data = {ordinaryLines}
            />
        );

    }
}

export default OrdinaryBusOptionsListContainer;