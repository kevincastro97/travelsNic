import React, {Component} from 'react';

import SmallBusinessDetail from './../components/smallBusinessDetail';

class TouristicCentresDetailContainer extends Component {

    constructor(props){
        super(props);

        const  smallBusiness = this.props.navigation.getParam('smallBusiness');

        this.state = {
            smallBusinessInformation: {
                title: smallBusiness.title,
                image: smallBusiness.image,
                direction: smallBusiness.direction,
                description: smallBusiness.description,
                phone: smallBusiness.phone,
                email: smallBusiness.email,
                whatsapp: smallBusiness.whatsapp,
            },
 
        }
    }

    render(){ 

        const {smallBusinessInformation } = this.state

        return(
            <SmallBusinessDetail
                data = {smallBusinessInformation}
            />
            
        );

    }
}

export default TouristicCentresDetailContainer;