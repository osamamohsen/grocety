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

export default class grocety extends Component {


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
