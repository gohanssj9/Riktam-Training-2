import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import {createStackNavigator} from 'react-navigation';

import MainScreen from './components/MainScreen';
import ShowHotelsScreen from './components/ShowHotelsScreen';
import EditDateScreen from './components/EditDateScreen';
import CalendarScreen from './components/CalendarScreen';

const RootStack = createStackNavigator(
  {
    MainScreen: {
      screen: MainScreen
    },
    ShowHotels: {
      screen: ShowHotelsScreen
    },
    EditDate: {
      screen: EditDateScreen
    },
    Calendar: {
      screen: CalendarScreen
    }
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