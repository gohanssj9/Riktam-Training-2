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
  View} from 'native-base';

export default class MainComponent extends Component {
  render() {
    return (
      <Container>
        <Header style = {{backgroundColor: '#dd4b39'}} androidStatusBarColor = '#bb4b39'>
          <Left>
            <Button transparent onPress = {this.props.openDrawer}>
              <Icon name = 'menu' />
            </Button>
          </Left>
          <Body>
            <Title style = {{marginLeft: 10}}>Inbox</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name = 'search' />
            </Button>
          </Right>
        </Header>
        <Content>
        </Content>
      </Container>      
    );
  }
}