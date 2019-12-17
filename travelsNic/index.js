/**
 * @format
 */

import {AppRegistry} from 'react-native';

import ProviderLit from './appWithProvider'

import ModalTester from './src/menu/components/navigationTabs'

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => ModalTester);
