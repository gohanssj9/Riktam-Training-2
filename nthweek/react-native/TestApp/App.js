import React, {Component} from 'react';
import {createStackNavigator} from 'react-navigation';

import ExtraApp from './components/ExtraApp';
import ComposeComponent from './components/ComposeComponent';
import MainComponent from './components/MainComponent';
import SearchComponent from './components/SearchComponent';

const RootStack = createStackNavigator(
  {
    MainApp: {
      screen: ExtraApp
    },
    Compose: {
      screen: ComposeComponent
    },
    MainScreen: {
      screen:  MainComponent
    },
    Search: {
      screen: SearchComponent
    },
  },
  {
    initialRouteName: 'MainApp',
    headerMode: 'none'
  }
);

export default class App extends Component {
  render(){
    return <RootStack />;
  }
}