import React, {Component} from 'react';
import {
  Container, 
  Header, 
  Title, 
  Content, 
  Footer, 
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text,
  View } from 'native-base';

export default class ComposeComponent extends Component {
  render(){
    return (
      <View>
        <Text> Hello, World! </Text>
      </View>
    );
  }
}