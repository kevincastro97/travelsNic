import React, {Component} from 'react';

import TouristicCentresDetail from './../components/touristicCentresDetail';

class TouristicCentresDetailContainer extends Component {

    constructor(props){
        super(props);

        const  touristicCentres = this.props.navigation.getParam('touristicCentres');

        this.state = {
            touristicCentresInformation: {
                title: touristicCentres.title,
                image: touristicCentres.image,
                imageStars: touristicCentres.imageStars,
                direction: touristicCentres.direction,
                description: touristicCentres.description,
                phone: touristicCentres.phone,
                email: touristicCentres.email,
                whatsapp: touristicCentres.whatsapp,
            },
 
        }
    }

    render(){ 

        const {touristicCentresInformation } = this.state

        return(
            <TouristicCentresDetail
                data = {touristicCentresInformation}
            />
            
        );

    }
}

export default TouristicCentresDetailContainer;