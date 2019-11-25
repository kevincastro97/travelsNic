import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'

import Map from './../../Map/containers/mapContainer';

const StackNavigatorMap = createStackNavigator({
    Ordinary: {
        screen: Map,
        navigationOptions: {
          title: 'Mapa',
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