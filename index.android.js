/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict';
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
    return (<GrocetyView />);
}
  
}
let styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#fff',
},
webView: {
    backgroundColor: '#fff',
    height: 350,
}
});

AppRegistry.registerComponent('grocety', () => grocety);
