import React from 'react';
import {StackNavigator} from 'react-navigation';

import CameraScreen from './screens/CameraScreen';

const TopNavigator = StackNavigator(
  {
    Camera: {
      screen: CameraScreen,
    },
  },
  {
    headerMode: 'none',
  },
);

export default TopNavigator;
