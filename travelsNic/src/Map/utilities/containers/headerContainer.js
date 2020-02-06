/*import React, { Component} from 'react';
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

    navigateToAddHotel = () =>{
      this.props.navigation.navigate('AddHotel')
      this._menu.hide();
    }

    navigateToBahiaMap = () =>{
      this.props.navigation.navigate('AddBahiaMap')
      this._menu.hide();
    }

    navigateToSmallBusiness = () =>{
      this.props.navigation.navigate('AddSmallBusiness')
      this._menu.hide();
    }

    navigateToTouristicCentress = () =>{
      this.props.navigation.navigate('AddTouristicCentress')
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

                navigateToAddHotel = {this.navigateToAddHotel}
                navigateToBahiaMap = {this.navigateToBahiaMap}
                navigateToSmallBusiness = {this.navigateToSmallBusiness}
                navigateToTouristicCentress = {this.navigateToTouristicCentress}

            />
        );
    }
}

export default withNavigation(HeaderContainer);*/


import React from 'react';
import { StyleSheet, Platform, Image, Text, View } from 'react-native';
import firebase from 'react-native-firebase'


export default class Home extends React.Component {
  state = { currentUser: null }

componentDidMount() {
    const { currentUser } = firebase.auth()
    this.setState({ currentUser })
}


render() {
    const { currentUser } = this.state
  return (
      <View style={styles.container}>

        <Text style={{fontSize: 20}}> 
          Hi<Text style={{color:'#e93766', fontSize: 20}}> 
              {currentUser && currentUser.email}!
            </Text>
          </Text>
        </View>
    )
  }
}
const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    resizeMode: 'contain',
    backgroundColor: '#ebe9e4'
},
})