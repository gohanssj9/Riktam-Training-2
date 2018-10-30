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
  View,
  Text,
  Drawer,
  Fab } from 'native-base';

export default class FilterComponent extends Component {
  render(){
    const {text} = this.props;
    return (
      <View style = {{margin: 8, paddingTop: 5, paddingBottom: 5, paddingLeft: 8, paddingRight: 8, backgroundColor: '#E6E6E6', borderRadius: 20, flex: 1, justifyContent: 'center', alignItems: 'center', fontFamily: 'Roboto'}}>
        <Text style = {{color: '#7B7B7B'}}> {text} </Text>
      </View>
    );
  }
}