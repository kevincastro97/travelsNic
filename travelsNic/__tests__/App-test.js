/**
 * @format
 */

import 'react-native';
import React from 'react';
import Login from '../src/login/components/login';
import SeparatorTexLogin from '../src/login/utilities/components/separatorText';
import A from '../src/buses/express/components/expressBusOptionsList';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<Login/>);
});

it('renders correctly', () => {
  renderer.create(<SeparatorTexLogin/>);
});

it('renders correctly', () => {
  renderer.create(<A/>);
});


