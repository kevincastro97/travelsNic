import React, {Component} from 'react';

import { View } from 'react-native'

import HotelAndRestaurantDetail from './../components/hotelAndRestaurantDetail';

class HotelAndRestaurantDetailContainer extends Component {

    constructor(props){
        super(props);

        const hotelAndRestaurant = this.props.navigation.getParam('hotelAndRestaurant');

        this.state = {
            hotelAndRestaurant: hotelAndRestaurant.detail,
        }
    }

    render(){

        const {hotelAndRestaurant} = this.state

        return(
            <View>
                <HotelAndRestaurantDetail
                    data = {hotelAndRestaurant}
                />
            </View>
            
        );

    }
}

export default HotelAndRestaurantDetailContainer;