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

import {TouchableNativeFeedback} from 'react-native';

export default class FilterComponent extends Component {
  constructor(props){
    super(props);

    this.state = {
      backgroundColorSet: '#E6E6E6',
      textColorSet: '#7B7B7B',
      active: false
    };
  }

  onPress(){
    const {backgroundColorSet, textColorSet, active} = this.state;
    if(active === false) this.setState({backgroundColorSet: '#156BC1', textColorSet: 'white', active: true});
    else this.setState({backgroundColorSet: '#E6E6E6', textColorSet: '#7B7B7B', active: false});
  }
  render(){
    const {text} = this.props;
    const {backgroundColorSet, textColorSet} = this.state;
    console.log(backgroundColorSet, textColorSet);
    return (
      <TouchableNativeFeedback onPress = {this.onPress}>
        <View style = {{
          margin: 8, 
          marginLeft: 3, 
          marginRight: 3, 
          paddingTop: 5, 
          paddingBottom: 5, 
          paddingLeft: 8, 
          paddingRight: 8, 
          backgroundColor: backgroundColorSet, 
          borderRadius: 20, 
          flex: 1, 
          justifyContent: 'center', 
          alignItems: 'center'
        }}>
          <Text style = {{color: textColorSet, fontFamily: 'RobotoM'}}> {text} </Text>
        </View>
      </TouchableNativeFeedback>
    );
  }
}