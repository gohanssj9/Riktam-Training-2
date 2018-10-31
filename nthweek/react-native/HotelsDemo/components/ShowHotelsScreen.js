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

import {ScrollView, FlatList} from 'react-native';

import FilterComponent from './FilterComponent';
import SingleHotelItem from './SingleHotelItem';
import hotelData from '../data.json';

export default class ShowHotelsScreen extends Component {
  render(){
    return (
       <Container>
        <Header style = {{backgroundColor: '#D32F2F', height: 113}} androidStatusBarColor = '#AF1D1F'>
          <Left>
            <Button transparent onPress = {() => {this.props.navigation.goBack()}}>
              <Icon name = 'arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Demo</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name = 'search' />
            </Button>
          </Right>
        </Header>
        <Content>
          <View style = {{height: 48, borderTopWidth: 0, elevation: 5, backgroundColor: '#FFFFFF'}}>
            <ScrollView horizontal showsHorizontalScrollIndicator = {false}>
              <FilterComponent text = {'Under Rs4000'} />
              <FilterComponent text = {'4★+'} />
              <FilterComponent text = {'4.0 +'} />
              <FilterComponent text = {'Free Breakfast'} />
              <FilterComponent text = {'Pool'} />
              <FilterComponent text = {'Free wifi'} />
              <FilterComponent text = {'Free Parking'} />
              <FilterComponent text = {'Pet Friendly'} />
            </ScrollView>
          </View>
          <View style = {{flex: 1, backgroundColor: '#E3DDCC', marginTop: 5}}>
            <FlatList
              data = {hotelData.items}
              renderItem = {(item) => <SingleHotelItem item = {item} />}
              keyExtractor = {(item) => item.id}
              ItemSeparatorComponent = {() => <View style = {{height: 0.5, backgroundColor: '#e5e5e5'}}></View>}
              initialNumToRender = {8}
              showsVerticalScrollIndicator = {false}
            />
          </View>
        </Content>
         <Footer>
          <FooterTab>
            <Button full style = {{backgroundColor: '#D32F2F'}}>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}