import React, {Component} from 'react';

import { View } from 'react-native'

import ExpressBusDetailList from '../components/expressBusDetailList';

class ExpressBusDetailListContainer extends Component {

    constructor(props){
        super(props)

        this.state = {

            expressListHeader: {
                title: 'Transporte Amador',
                subTitle: 'Juigalpa-Managua',
                distance: '1 kilometro',
                rate: 'C$ 50',
                approximateTime: '2 hora y 45 minutos',
                exit: '5: 00 Am',
                arrival: ' 12: 00 pm'
            },

            expressLines:[
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

        const {expressLines, expressListHeader} = this.state

        return(
            <View>
                <ExpressBusDetailList
                    data = {expressLines}
                    headers = {expressListHeader}
                />
            </View>
            
        );

    }
}

export default ExpressBusDetailListContainer;