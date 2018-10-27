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

import MailText from './MailText';

export default class ComposeComponent extends Component {
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
              <Icon name = 'attachment' type = 'MaterialCommunityIcons' />
            </Button>
            <Button transparent>
              <Icon name = 'send' type = 'MaterialCommunityIcons' />
            </Button>
            <Button transparent>            
              <Icon name = 'dots-vertical' type = 'MaterialCommunityIcons' />
            </Button>
          </Right>
        </Header>
        <Content>
          <MailText text = {'From'} mailText = {'sriteja.ayyagari@riktamtech.com'} displayText = {'flex'} displayIcon = {'flex'} />
          <MailText text = {'To'} mailText = {''} displayText = {'flex'} displayIcon = {'flex'} />
          <View style = {{height: 60, flex: 1, flexDirection: 'row', borderBottomColor: '#f1f1f1', borderBottomWidth: 1, padding: 10}}>
            <View style = {{flex: 1, justifyContent: 'center', alignItems: 'flex-start'}}>
              <Text style = {{color: '#858585', fontFamily: 'RobotoM', fontSize: 17.5}}> Subject </Text>
            </View>
          </View>
          <View style = {{flex: 1, flexDirection: 'row', padding: 10}}>
            <View style = {{flex: 1, justifyContent: 'center', alignItems: 'flex-start'}}>
              <Text style = {{color: '#858585', fontFamily: 'RobotoM', fontSize: 18}}> Compose email </Text>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}