/**
 * @format
 */

import {AppRegistry} from 'react-native';
import RegistryContainer from './src/registry/containers/registryContainer'
import NavigationTabs from './src/buses/ordinary/containers/ordinaryBusOptionsListContainer';
import ProviderLit from './appWithProvider'
import ModalTester from './src/menu/components/navigationTabs'

import Prueba from './src/tourism/hotelAndRestaurant/containers/HotelAndRestaurantOptionListContainer';

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => ModalTester);
