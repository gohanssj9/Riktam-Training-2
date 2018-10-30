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

import {Image, Dimensions} from 'react-native';

export default class MainScreen extends Component {
  render(){
    const {width, height} = Dimensions.get('window');
    return (
      <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View>
          <View>
            <Image source = {require('../assets/hotels.png')} style = {{height: 100, width: 300, resizeMode: 'contain'}} />
          </View>
          <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <View>
              <Button onPress = {() => this.props.navigation.navigate('ShowHotels')}>
                <Text> Find Deals near me ! </Text>
              </Button>
            </View>
          </View>
        </View>
      </View>
    );
  }
}