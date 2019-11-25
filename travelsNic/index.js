/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Login from './src/login/components/login';
import NavigationTabs from './src/menu/components/navigationTabs';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => NavigationTabs);
