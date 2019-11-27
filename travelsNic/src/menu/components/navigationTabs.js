import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Image } from 'react-native';

import StackNavigatorMap from './stackNavigatorMap';
import stackNavigatorOrdinary from './stackNavigatorOrdinary';
import stackNavigatorExpress from './stackNavigatorExpress';
import stackNavigatorTourism from './stackNavigatorTourism';

const menuTabs = createBottomTabNavigator({
    Inicio: {
        screen: StackNavigatorMap,
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

    Ordinarios: {
        screen: stackNavigatorOrdinary,
        navigationOptions: {
            tabBarLabel: 'Ordinarios',
            tabBarIcon: <Image
                source={require('./../../assets/menu/ordinaryBuses.png')}
                style={
                    {width: 26, height: 26,}
                }
            />,
        },
    },

    Expresos: {
        screen: stackNavigatorExpress,
        navigationOptions: {
            tabBarLabel: 'Expresos',
            tabBarIcon: <Image
                source={require('./../../assets/menu/expressBuses.png')}
                style={
                    {width: 26, height: 26,}
                }
            />,
        },
    },

    Turismo: {
        screen: stackNavigatorTourism,
        navigationOptions: {
            tabBarLabel: 'Turismo',
            tabBarIcon: <Image
                source={require('./../../assets/menu/tourism.png')}
                style={
                    {width: 26, height: 26,}
                }
            />,
        },
    },

}, {
    tabBarOptions: {
        activeTintColor: 'white',
        inactiveTintColor: 'black',
        activeBackgroundColor: '#069dab'
    },
});

export default createAppContainer(menuTabs);