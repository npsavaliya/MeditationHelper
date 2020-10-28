/**
 * @format
 */

import 'react-native';
import React from 'react';
import Login from '../app/features/login/containers';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('renders correctly', () => {
    const tree = renderer.create(<Login />).toJSON();
    expect(tree).toMatchSnapshot();
  });
