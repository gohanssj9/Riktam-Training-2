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

import {Image} from 'react-native';

export default class SingleHotelItem extends Component {
  render(){
    return(
      <View style = {{
        height: 195, 
        marginTop: 5, 
        marginBottom: 5, 
        marginLeft: 10, 
        marginRight: 10, 
        backgroundColor: '#FFFFFF',
        borderRadius: 7,
        flexDirection: 'row',
        flexWrap:'wrap',
        overflow: 'hidden'}}>
        <View style = {{flex: 2, backgroundColor: '#00ff00'}}></View>
        <View style = {{flex: 1,}}>
          <Image source = {require('../assets/room.jpg')} style = {{resizeMode: 'cover', height: '100%', width: '100%', position: 'absolute'}} />
          <View style = {{justifyContent: 'flex-end', alignItems: 'flex-end',}}>
            <View style = {{
              width: 0,
              height: 0,
              backgroundColor: 'transparent',
              borderStyle: 'solid',
              borderRightWidth: 50,
              borderTopWidth: 50,
              borderRightColor: 'transparent',
              borderTopColor: '#EFEFEF',
              transform: [{rotate: '90deg'}],
            }}>
            </View>
            <Icon name = "heart-o" type = "FontAwesome"  style = {{color: '#ff0000', zIndex: 10, fontSize: 16, marginTop: -42, marginRight: 8}}/>
          </View>
          <View style = {{flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end'}}>
            <View style = {{backgroundColor: '#990066', marginBottom: 10, marginRight: 10, borderRadius: 3}}>
              <Icon name = "ios-moon" type = "Ionicons" style = {{fontSize: 12, color: 'white', padding: 3}} />
            </View>
          </View>
        </View>
      </View>
    );
  }
}