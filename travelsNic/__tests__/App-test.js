/**
 * @format
 */

import 'react-native';
import React from 'react';
import Login from '../src/login/components/login';
import Ordinary from './../src/buses/ordinary/components/ordinaryBusOptionsList';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<Login/>);
});

it('renders correctly', () => {
  renderer.create(<Ordinary/>);
});