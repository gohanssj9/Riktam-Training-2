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

  export default class MailText extends Component {
    render(){
      const {text, mailText, displayText, displayIcon} = this.props;
      return (
        <View style = {{height: 55, flex: 1, flexDirection: 'row', borderBottomColor: '#f1f1f1', borderBottomWidth: 1, padding: 10}}>
          <View style = {{flex: 1, justifyContent: 'center', alignItems: 'flex-start'}}>
            <Text style = {{color: '#858585', fontFamily: 'RobotoM'}}> {text} </Text>
          </View>
          <View style = {{flex: 4, justifyContent: 'center', alignItems: 'center'}}>
            <Text numberOfLines = {1} style = {{fontWeight: '400', display: displayText}}> {mailText} </Text>
          </View>
          <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Icon name = 'chevron-down' type = 'MaterialCommunityIcons' style = {{color: '#858585', fontSize: 24, display: displayIcon}}/>
          </View>
        </View>
      );
    }
  }