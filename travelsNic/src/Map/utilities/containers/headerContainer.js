import React, { Component} from 'react';
import { withNavigation} from 'react-navigation';

import Header from './../components/header';

class HeaderContainer extends Component {

    constructor(props){
        super(props)
    }

    _menu = null;
 
    setMenuRef = ref => {
      this._menu = ref;
    };
   
    hideMenu = () => {
      this.props.navigation.goBack()
      this._menu.hide();
    };
   
    showMenu = () => {
      this._menu.show();
    };

    navigateToAboutUs = () =>{
        this.props.navigation.navigate('AboutUs')
        this._menu.hide();
    }

    navigateToProfile = () =>{
      this.props.navigation.navigate('Profile')
      this._menu.hide();
  }

    render(){

        const {
          onSelectOrigin,
          origin,
          onSelectDestination,
          destination,
        } = this.props;

        return(
            <Header
                showMenu = {this.showMenu}
                hideMenu = {this.hideMenu}
                setMenuRef = {this.setMenuRef}
                navigateToAboutUs = {this.navigateToAboutUs}
                navigateToProfile = {this.navigateToProfile}

                onSelectOrigin={onSelectOrigin}
                origin={origin}
                onSelectDestination={onSelectDestination}
                destination={destination}
            />
        );
    }
}

export default withNavigation(HeaderContainer);