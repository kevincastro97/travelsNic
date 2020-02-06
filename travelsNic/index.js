/**
 * @format
 */

import {AppRegistry} from 'react-native';

import ModalTester from './src/menu/components/navigationTabs'

import App from './src/menu/components/loginNavigator'

import X  from './src/personRules/buses/ordinary/containers/registryBusOrdinaryContainer';

import Image from './src/provado/image'

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
