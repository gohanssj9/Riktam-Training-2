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

import FastImage from 'react-native-fast-image';

export default class SingleHotelItem extends Component {
  constructor(props){
    super(props);
    this.state = {
      heartActive: false
    };
  }

  render(){
    const heartState = (this.state.heartActive === false ? "heart-o" : "heart");
    const {item} = this.props;
    const ratingText = (item.item.ratingText === "" ? "No guest reviews yet" : item.item.ratingText)
    const displayCheck = (item.item.ratingExists === "false" ? "none" : "flex")
    const backgroundColorRating = (item.item.ratingNumber > "4.5" ? "#00AF87" : "#FFFFFF")
    const colorRating = (item.item.ratingNumber > "4.5" ? "white" : "black")
    const image = item.item.roomImage
    return(
      <View style = {{
        height: 195, 
        marginTop: 5, 
        marginBottom: 5, 
        marginLeft: 10, 
        marginRight: 10, 
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        flexDirection: 'row',
        flexWrap:'wrap',
        overflow: 'hidden'}}>
        <View style = {{flex: 2, padding: 10}}>
          <View style = {{paddingLeft: 3}}>
            <Text numberOfLines = {1} style = {{fontSize: 16, fontFamily: 'RobotoLight', marginBottom: 5}}>{item.item.title}</Text>
            <Text numberOfLines = {1} style = {{fontSize: 12, fontFamily: 'RobotoLight', color: '#656565', marginBottom: 5}}>{item.item.location}</Text>
            <Text numberOfLines = {1} style = {{fontSize: 12, fontFamily: 'RobotoLight', color: '#656565', marginBottom: 5}}>{item.item.distance} from City Centre</Text>
            <Text numberOfLines = {1} style = {{fontSize: 20, fontFamily: 'RobotoLight', marginBottom: 5, color: '#7B1FA2', marginBottom: 5,}}>{item.item.price}</Text>
            <Text numberOfLines = {1} style = {{fontSize: 13, fontFamily: 'RobotoLight', marginBottom: 5, textDecorationLine: 'line-through', color: '#656565'}}>{item.item.cutOffPrice}</Text>
            <View style = {{flexDirection: 'row', marginBottom: 5}}>
              <Text style = {{fontSize: 15, fontFamily: 'RobotoLight', }}>{ratingText} </Text>
              <Text style = {{fontSize: 13, fontFamily: 'RobotoLight', backgroundColor: backgroundColorRating, color: colorRating, padding: 1.5, borderRadius: 4, display: displayCheck}}>{item.item.ratingNumber}</Text>
              <Text style = {{fontSize: 15, fontFamily: 'RobotoLight', display: displayCheck }}> / 5</Text>
            </View>
            <View style = {{flexDirection: 'row'}}>
              <Text style = {{fontSize: 12, fontFamily: 'RobotoLight', backgroundColor: '#990066', color: 'white', padding: 2, borderRadius: 3}}> Your Secret Price </Text>
              <Text></Text>
            </View>
          </View>
        </View>
        <View style = {{flex: 1,}}>
          <FastImage source = {{uri: item.item.roomImage, priority: FastImage.priority.normal}} style = {{height: '100%', width: '100%', position: 'absolute'}} resizeMode = {FastImage.resizeMode.cover} />
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
            <Icon name = {heartState} type = "FontAwesome"  style = {{color: '#ff0000', zIndex: 10, fontSize: 16, marginTop: -42, marginRight: 8}} onPress = {() => {this.setState({heartActive: !this.state.heartActive})}}/>
          </View>
          <View style = {{flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end'}}>
            <View style = {{backgroundColor: '#990066', marginBottom: 10, marginRight: 8, borderRadius: 3}}>
              <Icon name = "ios-moon" type = "Ionicons" style = {{fontSize: 12, color: 'white', padding: 3}} />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

// {uri: item.item.roomImage} -- removed due to performance issues. Will resolve later.