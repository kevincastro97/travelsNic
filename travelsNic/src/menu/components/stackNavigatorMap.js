import React from 'react';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'

import Map from './../../Map/containers/mapContainer';
import AboutUs from './../../settings/components/aboutUs';
import Profile from './../../profile/containers/profileContainer';

import HeaderComponent from './../../Map/utilities/containers/headerContainer'

const StackNavigatorMap = createStackNavigator({
    Map: {
        screen: Map,
        navigationOptions: {
          headerShown: false, 
        },
    },

    AboutUs: {
      screen: AboutUs,
      navigationOptions: {
        title: 'Acerca de nosotros',
        headerStyle: {
          backgroundColor: '#193555',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      },
    },

    Profile: {
      screen: Profile,
      navigationOptions: {
        title: 'Perfil',
        headerStyle: {
          backgroundColor: '#193555',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      },
    },

    HeaderComponent: {
      screen: HeaderComponent,
      navigationOptions: {
        title: 'Perfil',
        headerStyle: {
          backgroundColor: '#193555',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      },
    },
})

export default createAppContainer(StackNavigatorMap);