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
  Fab,
  Tab,
  Tabs,
  TabHeading } from 'native-base';

import CheckInScreen from './CheckInScreen';
import CheckOutScreen from './CheckOutScreen';

export default class CalendarScreen extends Component {
  constructor(props){
    super(props);

    this.state = {
      tabNum: 0
    };
  }

  render(){
    return (
      <Container>
        <Header style = {{backgroundColor: 'white', elevation: 0}} androidStatusBarColor = '#999999' hasTabs>
          <Left>
            <Button transparent onPress = {() => {this.props.navigation.goBack()}}>
              <Icon name='arrow-back' style = {{color: '#858585',  fontFamily: 'bold'}} />
            </Button>
          </Left>
          <Body></Body>
        </Header>
          <Tabs initialPage={0} page={this.state.tabNum} refs="mytabs" locked = {true} tabBarUnderlineStyle = {{backgroundColor: 'red'}} tabContainerStyle = {{elevation: 0}}>
            <Tab heading={<TabHeading style = {{backgroundColor: 'white'}}><Text style = {{color: '#D32F2F', fontFamily: 'RobotoLight'}}>CHECK IN</Text></TabHeading>}>
              <CheckInScreen moveToTab = {() => {this.setState({tabNum: 1})}} />
            </Tab>
            <Tab heading={<TabHeading style = {{backgroundColor: 'white'}}><Text style = {{color: '#D32F2F', fontFamily: 'RobotoLight'}}>CHECK OUT</Text></TabHeading>}>
              <CheckOutScreen moveBack = {() => {this.props.navigation.goBack()}} />
            </Tab>
          </Tabs>
      </Container>
    );
  }
}