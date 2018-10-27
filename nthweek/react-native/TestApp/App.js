import React, {Component} from 'react';
import {createStackNavigator} from 'react-navigation';

import ExtraApp from './components/ExtraApp';
import ComposeComponent from './components/ComposeComponent';

const RootStack = createStackNavigator(
  {
    MainApp: {
      screen: ExtraApp
    },
    Compose: {
      screen: ComposeComponent
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