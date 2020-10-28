/**
 * @format
 */

import 'react-native';
import React from 'react';
import MeditateLast from '../app/features/meditateLast/containers';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('renders correctly', () => {
    const tree = renderer.create(<MeditateLast />).toJSON();
    expect(tree).toMatchSnapshot();
  });
