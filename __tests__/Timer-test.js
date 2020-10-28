/**
 * @format
 */

import 'react-native';
import React from 'react';
import Timer from '../app/features/timer/containers';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('renders correctly', () => {
    const tree = renderer.create(<Timer />).toJSON();
    expect(tree).toMatchSnapshot();
  });
