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

import mailData from '../data.json';
import SingleItem from './SingleItem';
import SearchComponent from './SearchComponent';

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
              <Icon name = 'search' onPress = {this.props.openSearch} />
            </Button>
          </Right>
        </Header>
        <Content>
          <FlatList
            data = {mailData.items}
            renderItem = {(item) => <SingleItem item = {item} />}
            keyExtractor = {(item) => item.id}
            ItemSeparatorComponent = {() => <View style = {{height: 0.5, backgroundColor: '#e5e5e5'}}></View>}
            initialNumToRender = {7}
          />
        </Content>
      </Container>      
    );
  }
}