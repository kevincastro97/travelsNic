import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { Image } from 'react-native';

import Home from '../../Map/components/mapa';

const menuTabs = createBottomTabNavigator({
    Inicio: {
        screen: Home,
        navigationOptions: {
            tabBarLabel: 'Inicio',
            tabBarIcon: <Image
                source={require('./../../assets/menu/home.png')}
                style={
                    {width: 26, height: 26,}
                }
            />,
        },
    },
   
}, {
    tabBarOptions: {
        activeTintColor: '#673ab7',
        inactiveTintColor: '#546e7a',
    },
});

export default createAppContainer(menuTabs);