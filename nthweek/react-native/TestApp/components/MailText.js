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

import {StyleSheet, TextInput} from 'react-native';

export default class MailText extends Component {
  constructor(props){
    super(props);
    this.state = {
      text: ''
    };
  }

  componentWillMount(){
    const {mailText} = this.props;
    this.setState({text: mailText});
  }

  render(){
    const {text} = this.props;
    return (
      <View style = {styles.container}>
        <View style = {styles.firstView}>
          <Text style = {styles.fromText}> {text} </Text>
        </View>
        <View style = {styles.toSenderTextView}>
          <TextInput multiLine = {true} underlineColorAndroid='transparent' style = {styles.toText} value = {this.state.text} onChangeText = {(text) => this.setState({text})}/>
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
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5
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
    alignItems: 'flex-start',
    paddingLeft: 10,
  },
  fromText: {
    color: '#858585', 
    fontFamily: 'RobotoM',
  },
  toText: {
    fontFamily: 'RobotoM',
    fontSize: 17,
    paddingBottom: 5,
    width: '100%',
  },
  iconDisplay: {
    color: '#858585', 
    fontSize: 24
  }
});