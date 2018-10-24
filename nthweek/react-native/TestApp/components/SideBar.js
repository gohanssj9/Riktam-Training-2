import React, {Component} from 'react';
import {View, Text} from 'native-base';

export default class SideBar extends Component {
  render() {
    return (
      <View style={{flex:1 , backgroundColor: '#FFFFFF'}} >
        <Text>
            Hello World
        </Text>
      </View>
    );
  }
}