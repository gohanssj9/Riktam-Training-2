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

import {FlatList} from 'react-native';

import SearchText from './SearchText';

export default class SearchComponent extends Component {
  render(){
    return (
      <Container>
        <Header style = {{backgroundColor: '#FFFFFF'}} androidStatusBarColor = '#a5a5a5'>
          <Left>
            <Button transparent onPress = {() => {this.props.navigation.goBack()}}>
              <Icon name = 'arrow-left' type = 'MaterialCommunityIcons' style = {{color: '#858585'}}  />
            </Button>
          </Left>
          <Body>
            <Title style = {{marginLeft: 10, color: '#858585', fontSize: 17}}>Search mail</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name = 'microphone' type = 'MaterialCommunityIcons' style = {{color: '#858585'}} />
            </Button>
          </Right>
        </Header>
        <Content>
          <SearchText text = {'Office lunch'} />
          <SearchText text = {'holiday list'} />
          <SearchText text = {'Tigersheet'} />
          <SearchText text = {'people on leave today'} />
          <SearchText text = {'OyoRoomsApp '} />
        </Content>
      </Container>
    );
  }
}