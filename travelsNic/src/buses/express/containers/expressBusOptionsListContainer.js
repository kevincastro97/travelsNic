import React, {Component} from 'react';

import {
    withNavigation
} from 'react-navigation'

import ExpressBusOptionsList from '../components/expressBusOptionsList'

class ExpressBusOptionsListContainer extends Component {

    constructor(props){
        super(props)

        this.state = {
            expressLines:[
                {
                    key: '1',
                    image: require('./../../../assets/login/icon.png'),
                    title: 'Transporte el Amador',
                    line: 'Juigalpa - Managua',
                    price: 'C$ 50',
                    passengers: '54',
                    departureTime: '5:40 Am',
                    arrivalTime: '6:15 Pm'
                },

                {
                    key: '2',
                    image: require('./../../../assets/login/icon.png'),
                    title: 'Transporte el Bendecid',
                    line: 'Juigalpa - Managua',
                    price: 'C$ 50',
                    passengers: '54',
                    departureTime: '5:40 am',
                    arrivalTime: '6:15 am'
                },

                {
                    key: '3',
                    image: require('./../../../assets/login/icon.png'),
                    title: 'Transporte el Bendecidso',
                    line: 'Juigalpa - Managua',
                    price: 'C$ 50',
                    passengers: '54',
                    departureTime: '5:40 am',
                    arrivalTime: '6:15 am'
                },
                
            ]
        }
    }

    navigateToExpressDetail = () =>{
        this.props.navigation.navigate('ExpressDetail')
    }

    render(){

        const {expressLines } = this.state

        return(
            <ExpressBusOptionsList
                data = {expressLines}
                navigateToExpressDetail = {this.navigateToExpressDetail}
            />
        );

    }
}

export default withNavigation(ExpressBusOptionsListContainer);