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

import {StyleSheet} from 'react-native';

export default class MailText extends Component {
  render(){
    const {text, mailText} = this.props;
    return (
      <View style = {styles.container}>
        <View style = {styles.firstView}>
          <Text style = {styles.fromText}> {text} </Text>
        </View>
        <View style = {styles.toSenderTextView}>
          <Text numberOfLines = {1} style = {styles.toText}> {mailText} </Text>
        </View>
        <View style = {styles.lastView}>
          <Icon name = 'chevron-down' type = 'MaterialCommunityIcons' style = {styles.iconDisplay} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 55, 
    flex: 1, 
    flexDirection: 'row', 
    borderBottomColor: '#f1f1f1', 
    borderBottomWidth: 1, 
    padding: 10
  },
  firstView: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'flex-start'
  },  
  lastView: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  toSenderTextView: {
    flex: 5, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  fromText: {
    color: '#858585', 
    fontFamily: 'RobotoM'
  },
  toText: {
    fontWeight: '400'
  },
  iconDisplay: {
    color: '#858585', 
    fontSize: 24
  }
});