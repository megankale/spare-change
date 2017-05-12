import React from 'react';
import { AppRegistry } from 'react-native';
import Router from './src/components/Router';

const spareChange = () => (
    <Router />
  );


AppRegistry.registerComponent('spareChange', () => spareChange);
