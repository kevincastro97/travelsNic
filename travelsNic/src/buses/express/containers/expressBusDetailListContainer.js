import React, {Component} from 'react';

import { View } from 'react-native'

import ExpressBusDetailList from '../components/expressBusDetailList';

class ExpressBusDetailListContainer extends Component {

    constructor(props){
        super(props);

        const expressLines = this.props.navigation.getParam('expressLines');

        this.state = {

            expressListHeader: {
                title: expressLines.title,
                subTitle: expressLines.line,
                distance: expressLines.distance,
                rate: expressLines.price,
                approximateTime: expressLines.approximateTime,
                exit: expressLines.departureTime,
                arrival: expressLines.arrivalTime,
                image: expressLines.image,
            },
            
            expressLines: expressLines.seasons,
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