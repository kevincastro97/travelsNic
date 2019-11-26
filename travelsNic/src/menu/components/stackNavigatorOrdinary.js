import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'

import Ordinary from './../../buses/ordinary/containers/ordinaryBusOptionsListContainer';
import OrdinaryDetail from './../../buses/ordinary/containers/ordinaryBusDetailListContainer';

const StackNavigatorOrdinary = createStackNavigator({
    Ordinary: {
        screen: Ordinary,
        navigationOptions: {
          title: 'Autobuses Ordinarios',
          headerStyle: {
            backgroundColor: '#193555',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        },
    },
    OrdinaryDetail: {
      screen: OrdinaryDetail,
      navigationOptions: {
        title: 'Detalle de ruta',
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

export default createAppContainer(StackNavigatorOrdinary);