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

import {TextInput} from 'react-native';

export default class EditDateScreen extends Component {
  render(){
    return (
       <Container>
        <Header style = {{backgroundColor: 'white', elevation: 10}} androidStatusBarColor = '#999999'>
          <Body>
            <View style = {{flex: 1, width: '100%', height: '100%', flexDirection: 'row'}}>
              <View style = {{flex: 1, justifyContent: 'center',}}>
                <Button transparent onPress = {() => {this.props.navigation.goBack()}}>
                  <Icon name="arrow-back" style = {{color: '#858585'}} />
                </Button>
              </View>
              <View style = {{flex: 4, width: '100%', justifyContent: 'center'}}>
                <TextInput underlineColorAndroid='transparent' style = {{fontFamily: 'RobotoLight', fontSize: 17, paddingBottom: 5, width: '100%',}} value = {'Hyderabad, India'}/>
              </View>
              <View style = {{flex: 1, justifyContent: 'flex-end', alignSelf: 'center', flexDirection: 'row'}}>
                <Button transparent>
                  <Icon name = "md-close-circle" type = "Ionicons" style = {{color: '#858585', fontSize: 18, marginRight: 0}} />
                </Button>
              </View>
            </View>
          </Body>
        </Header>
        <Content style = {{backgroundColor: '#E8E8E8', marginTop: 7}}>
          <View style = {{height: 150, margin: 7, marginTop: 0, flexDirection: 'row'}}>
            <View style = {{flex: 1, backgroundColor: '#ff0000', marginRight: 3, borderRadius: 5}}></View>
            <View style = {{flex: 1, marginLeft: 3, backgroundColor: '#00ff00', borderRadius: 5}}></View>
          </View>
          <View style = {{height: 198, margin: 7, marginTop: 3, backgroundColor: 'white', borderRadius: 5}}></View>
        </Content>
        <Footer height = {47}>
          <FooterTab>
            <Button full style = {{backgroundColor: '#156BC1'}}>
              <Text style = {{fontFamily: 'RobotoLight', fontSize: 15, fontWeight: 'bold', color: 'white'}}>Show Deals</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

