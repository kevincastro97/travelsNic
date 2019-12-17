/**
 * @format
 */

import {AppRegistry} from 'react-native';

import ProviderLit from './appWithProvider'

import ModalTester from './src/menu/components/navigationTabs'

import App from './src/menu/components/loginNavigator'

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
