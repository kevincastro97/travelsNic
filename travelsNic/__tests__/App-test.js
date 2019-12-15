/**
 * @format
 */

import 'react-native';
import React from 'react';
import Login from '../src/login/components/login';
import LoginContainer from '../src/login/containers/loginCOntainer';
import SeparatorTexLogin from '../src/login/utilities/components/separatorText';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<Login/>);
});

