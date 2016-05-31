/*
 * Event platform example app
 * index is the entrypoint of the event app, which will register the Root Component
 * with the AppRegistry, it is advised not to change this file since it is generated
 */

import React from 'react-native';
import Root from './src/root';

const {
  AppRegistry
} = React;

AppRegistry.registerComponent('react_native_boilerplate', () => Root);
