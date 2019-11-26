import React, {Component} from 'react';

import { View } from 'react-native'

import OrdinaryBusOptionsList from './../components/ordinaryBusDetailList';

class OrdinaryBusDetailListContainer extends Component {

    constructor(props){
        super(props)

        this.state = {

            ordinaryListHeader: {
                title: 'Transporte Martinez',
                subTitle: 'Juigalpa-Managua',
                distance: '1 kilometro',
                rate: 'C$ 50',
                approximateTime: '2 hora y 45 minutos',
                exit: '5: 00 Am',
                arrival: ' 12: 00 pm'
            },

            ordinaryLines:[
                {
                    key: '1',
                    title: 'Las lajitas (Empalme de Cuapa)',
                    distance: '6 kilometros',
                    rate: 'C$ 120',
                    approximateTime: '1 hora y 45 minutos'
                },

                {
                    key: '2',
                    title: 'Las lajitas (Empalme de Cuapa)',
                    distance: '6 kilometros',
                    rate: 'C$ 120',
                    approximateTime: '1 hora y 45 minutos'
                },
                {
                    key: '3',
                    title: 'Las lajitas (Empalme de Cuapa)',
                    distance: '6 kilometros',
                    rate: 'C$ 120',
                    approximateTime: '1 hora y 45 minutos'
                },
                {
                    key: '4',
                    title: 'Las lajitas (Empalme de Cuapa)',
                    distance: '6 kilometros',
                    rate: 'C$ 120',
                    approximateTime: '1 hora y 45 minutos'
                },
                {
                    key: '5',
                    title: 'Las lajitas (Empalme de Cuapa)',
                    distance: '6 kilometros',
                    rate: 'C$ 120',
                    approximateTime: '1 hora y 45 minutos'
                },
                {
                    key: '6',
                    title: 'Las lajitas (Empalme de Cuapa)',
                    distance: '6 kilometros',
                    rate: 'C$ 120',
                    approximateTime: '1 hora y 45 minutos'
                },                
                {
                    key: '7',
                    title: 'Las lajitas (Empalme de Cuapa)',
                    distance: '6 kilometros',
                    rate: 'C$ 120',
                    approximateTime: '1 hora y 45 minutos'
                },
                {
                    key: '8',
                    title: 'Las lajitas (Empalme de Cuapa)',
                    distance: '6 kilometros',
                    rate: 'C$ 120',
                    approximateTime: '1 hora y 45 minutos'
                },
                
            ],
        }
    }

    render(){

        const {ordinaryLines, ordinaryListHeader} = this.state

        return(
            <View>
                <OrdinaryBusOptionsList
                    data = {ordinaryLines}
                    headers = {ordinaryListHeader}
                />
            </View>
            
        );

    }
}

export default OrdinaryBusDetailListContainer;