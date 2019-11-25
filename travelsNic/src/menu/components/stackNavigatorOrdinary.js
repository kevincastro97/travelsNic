import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'

import Ordinary from './../../buses/ordinary/containers/ordinaryBusOptionsListContainer';
import Pantalla1 from './../../buses/ordinary/components/pantalla1';

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
    Pantalla1: Pantalla1
})

export default createAppContainer(StackNavigatorOrdinary);