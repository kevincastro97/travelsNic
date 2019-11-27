import React, { Component} from 'react';

import { withNavigation } from 'react-navigation'

import ButtonMap from './../components/buttonMap';

class ButtonMapContainer extends Component {

    constructor(props){
        super(props)
    }

    navigateToSettings = () =>{
        this.props.navigation.navigate('Setting')
    }

    render(){
        return(
            <ButtonMap
                navigateToSettings = {this.navigateToSettings}
            />
        );
    }
}

export default  withNavigation(ButtonMapContainer);