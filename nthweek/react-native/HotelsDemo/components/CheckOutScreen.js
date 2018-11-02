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

export default class CheckOutScreen extends Component {
  render(){
    return (
      <CalendarList
        onVisibleMonthsChange={(months) => {console.log('now these months are visible', months);}}
        pastScrollRange={0}
        futureScrollRange={1}
        scrollEnabled={true}
        showScrollIndicator={true}
        current={'2018-11-03'}
        minDate={'2018-11-02'}
        markingType={'custom'}
        markedDates={{
          '2018-11-02': {
            customStyles: {
              container: {
                backgroundColor: '#156BC1'
              },
              text: {
                color: 'white'
              }
            }},
          '2018-11-03': {
            customStyles: {
                container: {
                  backgroundColor: 'white',
                  borderColor: '#156BC1',
                  borderWidth: 1,
                },
                text: {
                  color: 'black',
                },
            }
          }
        }}

        onDayPress = {this.props.moveBack}
      />
    );
  }
}