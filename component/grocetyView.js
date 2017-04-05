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
  View,
  TouchableHighlight,
} from 'react-native';

import SplashScreen from 'react-native-splash-screen';

export default class grocety extends Component {

  constructor(props){
  	super(props);
    console.disableYellowBox = true;
  	this.state = {};
  }
  
  componentDidMount() {
        // do anything while splash screen keeps, use await to wait for an async task.
      SplashScreen.hide();
  }

  onNavigationStateChange = (navState) => { this.setState({ backButtonEnabled: navState.canGoBack, forwardButtonEnabled: navState.canGoForward, url: navState.url, status: navState.title, loading: navState.loading, scalesPageToFit: true }); };

  webviewRenderError =  (errorDomain, errorCode, errorDesc) => {

      return (

      <View style={styles.container}>
          <Text style={styles.noConnection}>
            No Internet Connection. Make sure Wi-Fi or Mobile data is turned on
          </Text>

      </View>
    )
}
  LoadingPage = (event) => {
    // alert("ASD");
  }

  onShouldStartLoadWithRequest = (event) => {
    // Implement any custom loading logic here, don't forget to return!
    return true;
  };


  render() {
    return (
      <WebView
        source={{uri: 'http://magento.shiftdev.net/grocety/'}}
        style={{marginTop: 20}}
        renderError = {this.webviewRenderError}
        automaticallyAdjustContentInsets={false}
        startInLoadingState={true}
      />
    );
  }
}

// scalesPageToFit={true}
//         domStorageEnabled={true}
//         onShouldStartLoadWithRequest={this.onShouldStartLoadWithRequest}
//         scalesPageToFit={true}
//         scrollEnabled={true}

const styles = StyleSheet.create({
  noConnection: {
    // flex: 1,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 22,
    // marginTop: 70,
    fontFamily: 'string',
    color: 'black',
    // fontStyle: 'italic',
    // textShadowColor: '#252525',
    // textShadowOffset: {width: 2, height: 2},
    // textShadowRadius: 15,
    // marginBottom: 50,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 0,
    alignItems: 'center',
  }
});
