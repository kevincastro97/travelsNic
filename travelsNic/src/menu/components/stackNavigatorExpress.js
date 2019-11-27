import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'

import Express from './../../buses/express/containers/expressBusOptionsListContainer';
import ExpressDetail from './../../buses/express/containers/expressBusDetailListContainer';
import ButtonMap from './../../Map/utilities/components/buttonMap'

const StackNavigatorExpress = createStackNavigator({
  Express: {
    screen: Express,
    navigationOptions: {
      title: 'Autobuses Expresos',
      headerStyle: {
        backgroundColor: '#193555',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
},

ExpressDetail: {
  screen: ExpressDetail,
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

export default createAppContainer(StackNavigatorExpress);