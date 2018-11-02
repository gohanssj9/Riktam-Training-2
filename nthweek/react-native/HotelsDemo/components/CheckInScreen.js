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

import {CalendarList} from 'react-native-calendars'; 

export default class CheckInScreen extends Component {
  constructor(props){
    super(props);
    this.state = {};
    this.onDayPress = this.onDayPress.bind(this);
  }

  onDayPress(day) {
    this.setState({
      selected: day.dateString
    });
  }

  render(){
    return (
      <CalendarList
        onVisibleMonthsChange={(months) => {console.log('now these months are visible', months);}}
        pastScrollRange={0}
        futureScrollRange={1}
        scrollEnabled={true}
        showScrollIndicator={true}
        current={'2018-11-02'}
        minDate={'2018-11-02'}
        markedDates={{
          '2018-11-02': {selected: true, selectedColor: '#156BC1'},
        }}
        onDayPress = {this.props.moveToTab}
      />
    );
  }
}