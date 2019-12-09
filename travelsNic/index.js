/**
 * @format
 */

import {AppRegistry} from 'react-native';
import RegistryContainer from './src/registry/containers/registryContainer'
import NavigationTabs from './src/menu/components/loginNavigator';
import ProviderLit from './appWithProvider'
import ModalTester from './src/modalContainer'

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => ProviderLit);
