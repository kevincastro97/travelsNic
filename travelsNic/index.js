/**
 * @format
 */

import {AppRegistry} from 'react-native';
import RegistryContainer from './src/registry/containers/registryContainer'
import NavigationTabs from './src/menu/components/loginNavigator';

import ModalTester from './src/modal'

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => NavigationTabs);
