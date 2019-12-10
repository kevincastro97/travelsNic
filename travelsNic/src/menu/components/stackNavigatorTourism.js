import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'

import Tourism from './../../tourism/containers/tourismMenuContainer';

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
})

export default createAppContainer(StackNavigatorTourism);