import React, {Component} from 'react';

import TourismMenu from './../components/tourismMenu'

class TourismMenuContainer extends Component {

    navigationToHotelAndRestaurant = () =>{
        this.props.navigation.navigate('HotelAndRestaurant')
    }

    navigationToSmallBusiness = () =>{
        this.props.navigation.navigate('SmallBusiness')
    }

    navigationToTuristicCentres = () =>{
        this.props.navigation.navigate('TuristicCentres')
    }

    render(){
        return(
            <TourismMenu
                navigationToHotelAndRestaurant = {this.navigationToHotelAndRestaurant}
                navigationToSmallBusiness = {this.navigationToSmallBusiness}
                navigationToTuristicCentres = {this.navigationToTuristicCentres}
            />
        );
    }
}

export default TourismMenuContainer;