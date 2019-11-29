import React from 'react';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'

import Map from './../../Map/containers/mapContainer';
import Setting from './../../settings/containers/settingContainer';

const StackNavigatorMap = createStackNavigator({
    Ordinary: {
        screen: Map,
        navigationOptions: {
          headerShown: false, 
        },
    },

    Setting: {
      screen: Setting,
      navigationOptions: {
        title: 'Configuraciones',
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