import React, {Component} from 'react';

import HotelAndRestaurantOptionList from './../components/hotelAndRestaurantOptionList';

class HotelAndRestaurantOptionListContainer extends Component {

    constructor(props){
        super(props);

        this.state = {
            data: [
                {
                    image: '',
                    title: 'Quintanilla',
                    department: 'Chontales',
                    imageStars: '',
                    direction: 'Del puente Santurario 1 cuadra al Oeste',
                    price: 'C$ 340'
                },

                {
                    image: '',
                    title: 'Quintanilla',
                    department: 'Chontales',
                    imageStars: '',
                    direction: 'Del puente Santurario 1 cuadra al Oeste',
                    price: 'C$ 340'
                },

                {
                    image: '',
                    title: 'Quintanilla',
                    department: 'Chontales',
                    imageStars: '',
                    direction: 'Del puente Santurario 1 cuadra al Oeste',
                    price: 'C$ 340'
                },

                {
                    image: '',
                    title: 'Quintanilla',
                    department: 'Chontales',
                    imageStars: '',
                    direction: 'Del puente Santurario 1 cuadra al Oeste',
                    price: 'C$ 340'
                },

                {
                    image: '',
                    title: 'Quintanilla',
                    department: 'Chontales',
                    imageStars: '',
                    direction: 'Del puente Santurario 1 cuadra al Oeste',
                    price: 'C$ 340'
                }
            ]
        }
    }

    render(){
        const { data } = this.state;
        return(
            <HotelAndRestaurantOptionList
                data = {data}
            />
        );
    }
}

export default HotelAndRestaurantOptionListContainer;