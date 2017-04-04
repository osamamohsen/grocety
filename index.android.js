/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  WebView,
  View
} from 'react-native';

import GrocetyView from './component/grocetyView';
import SplashScreen from 'react-native-splash-screen';

export default class grocety extends Component {

    componentDidMount() {
         // do anything while splash screen keeps, use await to wait for an async task.
        SplashScreen.hide();
    }


  render() {
    return (
      <GrocetyView />
    );
  }
}

AppRegistry.registerComponent('grocety', () => grocety);
