/**
 * @format
 */

import {AppRegistry} from 'react-native';

import ModalTester from './src/menu/components/navigationTabs'

import App from './src/menu/components/loginNavigator'

import Foto  from './src/settings/containers/agregandoImageContiener';

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
