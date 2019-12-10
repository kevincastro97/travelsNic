import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'

import Tourism from './../../tourism/menuTourism/containers/tourismMenuContainer';
import HotelAndRestaurant from './../../tourism/hotelAndRestaurant/containers/HotelAndRestaurantOptionListContainer'
import SmallBusiness from './../../tourism/smallBusiness/containers/smallBusinessOptionListContainer';
import TuristicCentres from './../../tourism/touristicCentres/containers/touristicCentresOptionListContainer';

const StackNavigatorTourism = createStackNavigator({
  Tourism: {
      screen: Tourism,
      navigationOptions: {
        title: 'Negocios Nicaraguenses',
        headerStyle: {
          backgroundColor: '#193555',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      },
  },

  HotelAndRestaurant: {
    screen: HotelAndRestaurant,
    navigationOptions: {
      title: 'Hoteles y Restaurante',
      headerStyle: {
        backgroundColor: '#193555',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },

  SmallBusiness: {
    screen: SmallBusiness,
    navigationOptions: {
      title: 'Pequeños Negocios',
      headerStyle: {
        backgroundColor: '#193555',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },

  TuristicCentres: {
    screen: TuristicCentres,
    navigationOptions: {
      title: 'Centros Turisticos',
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

export default createAppContainer(StackNavigatorTourism);