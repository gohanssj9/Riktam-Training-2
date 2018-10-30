import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import {createStackNavigator} from 'react-navigation';

import MainScreen from './components/MainScreen';

const RootStack = createStackNavigator(
  {
    MainScreen: {
      screen: MainScreen
    },
  },
  {
    initialRouteName: 'MainScreen',
    headerMode: 'none'
  }

);

export default class App extends Component {
  render() {
    return <RootStack /> ;
  }
}