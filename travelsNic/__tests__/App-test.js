/**
 * @format
 */

import 'react-native';
import React from 'react';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

//Prueba de los componentes de la carpeta 'login'
import Login from '../src/login/components/login';
import SeparatorTexLogin from '../src/login/utilities/components/separatorText';

//Prueba unitaria LOGIN
it('Login correctly', () => {
  renderer.create(<Login/>);
});

it('SeparatorTexLogin correctly', () => {
  renderer.create(<SeparatorTexLogin/>);
});

//Prueba de los componentes de la carpeta 'registro'
import Registry from './../src/registry/components/registry'
import SeparatorTextRegistry from './../src/registry/utilities/components/separatorText'

//Prueba unitaria REGISTRY
it('Registry correctly', () => {
  renderer.create(<Registry/>);
});

it('SeparatorTextRegistry correctly', () => {
  renderer.create(<SeparatorTextRegistry/>);
});

//Prueba de los componentes de la carpeta 'buses-expresos'
import ExpressBusOptionList from './../src/buses/express/components/expressBusOptionsList'
import ExpressSearchFor from './../src/buses/express/components/expressSearchFor'
import ExpressContentSplitterExpress from './../src/buses/express/utilities/components/expressContentSplitter'
import ExpressSeasons from './../src/buses/express/utilities/components/expressSeasons'
import ExpressSeparatorLine from './../src/buses/express/utilities/components/expressSeparatorLine'
import ExpressSeparatorList from './../src/buses/express/utilities/components/expressSeparatorList'
import ExpressTextDivider from './../src/buses/express/utilities/components/expressTextDivider'
import ExpressTransparentEffect from './../src/buses/express/utilities/components/expressTransparentEffect'

//Prueba unitaria de BUSES EXPRESOS
it('ExpressBusOptionList correctly', () => {
  renderer.create(<ExpressBusOptionList/>);
});

it('ExpressSearchFor correctly', () => {
  renderer.create(<ExpressSearchFor/>);
});

it('ExpressContentSplitterExpress correctly', () => {
  renderer.create(<ExpressContentSplitterExpress/>);
});

it('ExpressSeasons correctly', () => {
  renderer.create(<ExpressSeasons/>);
});

it('ExpressSeparatorLine correctly', () => {
  renderer.create(<ExpressSeparatorLine/>);
});

it('ExpressSeparatorList correctly', () => {
  renderer.create(<ExpressSeparatorList/>);
});

it('ExpressTextDivider correctly', () => {
  renderer.create(<ExpressTextDivider/>);
});

it('ExpressTransparentEffect correctly', () => {
  renderer.create(<ExpressTransparentEffect/>);
});

//Prueba de los componentes de la carpeta 'buses-ordinarios'
import OrdinaryBusOptionList from './../src/buses/ordinary/components/ordinaryBusOptionsList'
import OrdinarySearchFor from './../src/buses/ordinary/components/searchFor'
import OrdinaryContentSplitter from './../src/buses/ordinary/utilities/components/contentSplitter'
import OrdinarySeasons from './../src/buses/ordinary/utilities/components/seasons'
import OrdinarySeparatorLine from './../src/buses/ordinary/utilities/components/separatorLine'
import OrdinarySeparatorList from './../src/buses/ordinary/utilities/components/separatorList'
import OrdinaryTextDivider from './../src/buses/ordinary/utilities/components/textDivider'
import OrdinaryTransparentEffect from './../src/buses/ordinary/utilities/components/transparentEffect'

//Pruebas unitarias de BUSES ORDINARIOS

it('OrdinaryBusOptionList correctly', () => {
  renderer.create(<OrdinaryBusOptionList/>);
});

it('OrdinarySearchFor correctly', () => {
  renderer.create(<OrdinarySearchFor/>);
});

it('OrdinaryContentSplitter correctly', () => {
  renderer.create(<OrdinaryContentSplitter/>);
});

it('OrdinarySeasons correctly', () => {
  renderer.create(<OrdinarySeasons/>);
});

it('OrdinarySeparatorLine correctly', () => {
  renderer.create(<OrdinarySeparatorLine/>);
});

it('OrdinarySeparatorList correctly', () => {
  renderer.create(<OrdinarySeparatorList/>);
});

it('OrdinaryTextDivider correctly', () => {
  renderer.create(<OrdinaryTextDivider/>);
});

it('OrdinaryTransparentEffect correctly', () => {
  renderer.create(<OrdinaryTransparentEffect/>);
});

//Prueba de los componentes de la carpeta 'touristic-hotelAndRestaurant'
import HotelAndRestaurantOptionList from './../src/tourism/hotelAndRestaurant/components/hotelAndRestaurantOptionList'
import HotelAndRestaurantSearchFor from './../src/tourism/hotelAndRestaurant/components/searchFor'
import HotelAndRestaurantSeparatorHorizontal from './../src/tourism/hotelAndRestaurant/utilities/separatorHorizontal'
import HotelAndRestaurantSeparatorList from './../src/tourism/hotelAndRestaurant/utilities/separatorList'
import HotelAndRestaurantTextDivider from './../src/tourism/hotelAndRestaurant/utilities/textDivider'
import HotelAndRestaurantTransparentEffect from './../src/tourism/hotelAndRestaurant/utilities/transparentEffect'

//Pruebas unitarias de TOURISTIC HOTEL_AND_RESTAURANT

it('HotelAndRestaurantOptionList correctly', () => {
  renderer.create(<HotelAndRestaurantOptionList/>);
});

it('HotelAndRestaurantSearchFor correctly', () => {
  renderer.create(<HotelAndRestaurantSearchFor/>);
});

it('HotelAndRestaurantSeparatorHorizontal correctly', () => {
  renderer.create(<HotelAndRestaurantSeparatorHorizontal/>);
});

it('HotelAndRestaurantSeparatorList correctly', () => {
  renderer.create(<HotelAndRestaurantSeparatorList/>);
});

it('HotelAndRestaurantTextDivider correctly', () => {
  renderer.create(<HotelAndRestaurantTextDivider/>);
});

it('HotelAndRestaurantTransparentEffect correctly', () => {
  renderer.create(<HotelAndRestaurantTransparentEffect/>);
});

//Prueba de los componentes de la carpeta 'touristic-smallBusiness'
import SmallBusinessOptionList from './../src/tourism/smallBusiness/components/smallBusinessOptionList'
import SearchForSmallBusiness from './../src/tourism/smallBusiness/components/searchForSmallBusiness'
import SmallBusinessSeparatorHorizontal from './../src/tourism/smallBusiness/utilities/separatorHorizontal'
import SmallBusinessSeparatorList from './../src/tourism/smallBusiness/utilities/separatorList'
import SmallBusinessTextDivider from './../src/tourism/smallBusiness/utilities/textDivider'
import SmallBusinessTransparentEffect from './../src/tourism/smallBusiness/utilities/transparentEffect'

//Pruebas unitarias de TOURISTIC SMALL_BUSINESS

it('SmallBusinessOptionList correctly', () => {
  renderer.create(<SmallBusinessOptionList/>);
});

it('SearchForSmallBusiness correctly', () => {
  renderer.create(<SearchForSmallBusiness/>);
});

it('SmallBusinessSeparatorHorizontal correctly', () => {
  renderer.create(<SmallBusinessSeparatorHorizontal/>);
});

it('SmallBusinessSeparatorList correctly', () => {
  renderer.create(<SmallBusinessSeparatorList/>);
});

it('SmallBusinessTextDivider correctly', () => {
  renderer.create(<SmallBusinessTextDivider/>);
});

it('SmallBusinessTransparentEffect correctly', () => {
  renderer.create(<SmallBusinessTransparentEffect/>);
});

//Prueba de los componentes de la carpeta 'touristic-touristicCentres'
import TouristicCentresOptionList from './../src/tourism/touristicCentres/components/touristicCentresOptionList'
import TouristicCentresSearchFor from './../src/tourism/touristicCentres/components/searchFor'
import TouristicCentresSeparatorHorizontal from './../src/tourism/touristicCentres/utilities/separatorHorizontal'
import TouristicCentresSeparatorList from './../src/tourism/touristicCentres/utilities/separatorList'
import TouristicCentresTextDivider from './../src/tourism/touristicCentres/utilities/textDivider'
import TouristicCentresTransparentEffect from './../src/tourism/touristicCentres/utilities/transparentEffect'

//Pruebas unitarias de TOURISTIC TOURISTIC_CENTRES

it('TouristicCentresOptionList correctly', () => {
  renderer.create(<TouristicCentresOptionList/>);
});

it('TouristicCentresSearchFor correctly', () => {
  renderer.create(<TouristicCentresSearchFor/>);
});

it('TouristicCentresSeparatorHorizontal correctly', () => {
  renderer.create(<TouristicCentresSeparatorHorizontal/>);
});

it('TouristicCentresSeparatorList correctly', () => {
  renderer.create(<TouristicCentresSeparatorList/>);
});

it('TouristicCentresTextDivider correctly', () => {
  renderer.create(<TouristicCentresTextDivider/>);
});

it('TouristicCentresTransparentEffect correctly', () => {
  renderer.create(<TouristicCentresTransparentEffect/>);
});
