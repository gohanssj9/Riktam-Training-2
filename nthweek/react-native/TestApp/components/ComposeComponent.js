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

import {TextInput} from 'react-native';

import MailText from './MailText';

export default class ComposeComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      subject: '',
      compose_email: ''
    };
  }
  render(){
    return (
      <Container>
        <Header style = {{backgroundColor: '#dd4b39'}} androidStatusBarColor = '#bb4b39'>
          <Left>
            <Button transparent onPress = {() => {this.props.navigation.goBack()}}>
              <Icon name = 'arrow-left' type = 'MaterialCommunityIcons' />
            </Button>
          </Left>
          <Body>
            <Title style = {{marginLeft: 10}}>Compose</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name = 'attachment' type = 'MaterialCommunityIcons' style = {{fontSize: 25}} />
            </Button>
            <Button transparent>
              <Icon name = 'send' type = 'MaterialCommunityIcons' style = {{fontSize: 25}} />
            </Button>
            <Button transparent>            
              <Icon name = 'dots-vertical' type = 'MaterialCommunityIcons' style = {{marginLeft: -5, marginRight: -5, fontSize: 25}} />
            </Button>
          </Right>
        </Header>
        <Content>
          <MailText text = {'From'} mailText = {'sriteja.ayyagari@riktamtech.com'} />
          <MailText text = {'To'} mailText = {''} />
          <View style = {{height: 60, flex: 1, flexDirection: 'row', borderBottomColor: '#f1f1f1', borderBottomWidth: 1, paddingLeft: 10, paddingRight: 10, paddingTop: 5, paddingBottom: 5}}>
            <View style = {{flex: 1, justifyContent: 'center', alignItems: 'flex-start'}}>
              <TextInput multiline = {true} value = {this.state.subject} placeholder = 'Subject' placeholderTextColor = '#858585' style = {{fontFamily: 'RobotoM', fontSize: 17.5, width: '100%'}} onChangeText = {(subject) => this.setState({subject})} />
            </View>
          </View>
          <View style = {{flex: 1, flexDirection: 'row',  paddingLeft: 10, paddingRight: 10, paddingTop: 0, paddingBottom: 5}}>
            <View style = {{flex: 1, justifyContent: 'center', alignItems: 'flex-start'}}>
              <TextInput multiline = {true} value = {this.state.compose_email} placeholder = 'Compose email'  placeholderTextColor = '#858585' style = {{fontFamily: 'RobotoM', fontSize: 18, width: '100%'}} onChangeText = {(compose_email) => this.setState({compose_email})} />
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}