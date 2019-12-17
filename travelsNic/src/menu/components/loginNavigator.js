import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'

import Login from './../../login/containers/loginContainer';
import Registry from './../../registry/containers/registryContainer';
import MenuTabs from './../../menu/components/navigationTabs';

const LoginNavigator = createStackNavigator({
    Login: {
        screen: Login,
        navigationOptions: { 
            headerShown: false,
        }
    },

    MenuTabs: {
        screen: MenuTabs,
        navigationOptions: { 
            headerShown: false,   
        }
    },

    Registry: {
        screen: Registry,
        navigationOptions: { 
            headerShown: false,   
        }
    },
    
})

export default createAppContainer(LoginNavigator);