import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'

import Pantalla1 from './../../buses/ordinary/components/pantalla1';

const StackNavigatorExpress = createStackNavigator({

    Pantalla1:  Pantalla1,

})

export default createAppContainer(StackNavigatorExpress);