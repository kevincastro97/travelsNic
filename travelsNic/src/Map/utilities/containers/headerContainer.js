import React, { Component} from 'react';

import { withNavigation } from 'react-navigation'

import ButtonMap from './../components/header';

class ButtonMapContainer extends Component {

    constructor(props){
        super(props)
    }

    _menu = null;
 
    setMenuRef = ref => {
      this._menu = ref;
    };
   
    hideMenu = () => {
      this._menu.hide();
    };
   
    showMenu = () => {
      this._menu.show();
    };

    navigateToSettings = () =>{
        this.props.navigation.navigate('Setting')
        this._menu.hide();
    }

    render(){
        return(
            <ButtonMap
                showMenu = {this.showMenu}
                hideMenu = {this.hideMenu}
                setMenuRef = {this.setMenuRef}
                navigateToSettings = {this.navigateToSettings}
            />
        );
    }
}

export default  withNavigation(ButtonMapContainer);