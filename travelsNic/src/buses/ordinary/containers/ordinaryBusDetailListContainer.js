import React, {Component} from 'react';

import { View } from 'react-native'

import OrdinaryBusOptionsList from './../components/ordinaryBusDetailList';

class OrdinaryBusDetailListContainer extends Component {

    constructor(props){
        super(props);

        const ordinaryLines = this.props.navigation.getParam('ordinaryLines');

        this.state = {

            ordinaryListHeader: {
                title: ordinaryLines.title,
                subTitle: ordinaryLines.line,
                distance: ordinaryLines.distance,
                rate: ordinaryLines.price,
                approximateTime: ordinaryLines.approximateTime,
                exit: ordinaryLines.departureTime,
                arrival: ordinaryLines.arrivalTime,
                image: ordinaryLines.image,
            },
            ordinaryLines: ordinaryLines.seasons,
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