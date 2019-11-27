import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'

import Ordinary from './../../buses/ordinary/containers/ordinaryBusOptionsListContainer';
import OrdinaryDetail from './../../buses/ordinary/containers/ordinaryBusDetailListContainer';
import ButtonMap from './../../Map/utilities/components/buttonMap'

const StackNavigatorTourism = createStackNavigator({
    Ordinary: {
        screen: Ordinary,
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
        headerRight: () => (
          <ButtonMap/>
        ),
      },
  },
})

export default createAppContainer(StackNavigatorTourism);