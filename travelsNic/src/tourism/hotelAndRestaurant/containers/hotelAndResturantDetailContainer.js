import React, {Component} from 'react';

import HotelAndRestaurantDetail from './../components/hotelAndRestaurantDetail';

class HotelAndRestaurantDetailContainer extends Component {

    constructor(props){
        super(props);

        const  hotelAndRestaurant = this.props.navigation.getParam('hotelAndRestaurant');

        this.state = {
            hotelAndRestaurantInformation: {
                title: hotelAndRestaurant.title,
                image: hotelAndRestaurant.image,
                imageStars: hotelAndRestaurant.imageStars,
                direction: hotelAndRestaurant.direction,
                description: hotelAndRestaurant.description,
                phone: hotelAndRestaurant.phone,
                email: hotelAndRestaurant.email,
                whatsapp: hotelAndRestaurant.whatsapp,
            },
 
        }
    }

    render(){ 

        const {hotelAndRestaurantInformation } = this.state

        return(
            <HotelAndRestaurantDetail
                data = {hotelAndRestaurantInformation}
            />
            
        );

    }
}

export default HotelAndRestaurantDetailContainer;