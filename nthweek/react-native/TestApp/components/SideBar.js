import React, {Component} from 'react';
import {View, Text, Icon} from 'native-base';
import {Image, StyleSheet, ScrollView} from 'react-native';
import gmail from '../assets/backgroundGmail.jpg';

import CircleText from './CircleText';
import IconText from './IconText';
export default class SideBar extends Component {
  render() {
    return (
      <View style={styles.container} >
      <ScrollView>
        <View style = {styles.insideContainer}>
          <Image 
            source = {require('../assets/backgroundGmail.jpg')} 
            style = {styles.backgroundImage}>
          </Image>
          <View style = {styles.circle}>
            <CircleText 
              text = {'S'} 
              background_color = {'#7e4295'} 
              width = {60} 
              height = {60} 
              marginBottom = {0} 
            />
          </View>
          <View style = {styles.mailContainer}>
            <View style = {styles.textContainer}>
              <Text style = {styles.name}> Sriteja Ayyagari </Text>
              <Text style = {styles.email}> sriteja.ayyagari@riktamtech.com </Text>
            </View>
            <View style = {styles.iconContainer}>
              <Icon name = "arrow-drop-down" type = "MaterialIcons" style = {styles.icon} />
            </View>
          </View>
        </View>
        <View style = {{flex: 1}}>
          <View style = {{paddingTop: 9, paddingBottom: 9, borderBottomColor: '#e5e5e5', borderBottomWidth: 1,}}>
            <IconText icon = {'inbox-multiple'} text = {'All inboxes'} />
          </View>          
          <View style = {{paddingTop: 9, paddingBottom: 9, borderBottomColor: '#e5e5e5', borderBottomWidth: 1,}}>
            <View style = {{backgroundColor: '#e5e5e5'}}>
              <IconText icon = {'inbox'} text = {'Inbox'} color = {'black'} />
            </View>
          </View>
          <View style = {{borderBottomColor: '#e5e5e5', borderBottomWidth: 1, paddingBottom: 10}}>
            <Text style = {{fontSize: 13, color: '#858585', paddingLeft: 10, paddingTop: 10, paddingBottom: 10}}> Recent labels </Text>
            <IconText icon = {'label'} text = {'Tigersheet'} />
          </View>
          <View style = {{borderBottomColor: '#e5e5e5', borderBottomWidth: 1, paddingBottom: 10}}>
            <Text style = {{fontSize: 13, color: '#858585', paddingLeft: 10, paddingTop: 10, paddingBottom: 10}}> All labels </Text>
            <IconText icon = {'star'} text = {'Starred'} />
            <IconText icon = {'clock'} text = {'Snoozed'} />
            <IconText icon = {'chevron-double-right'} text = {'Important'} />
            <IconText icon = {'send'} text = {'Sent'} />
            <IconText icon = {'send'} text = {'Outbox'} />
            <IconText icon = {'file'} text = {'Drafts'} />
            <IconText icon = {'email'} text = {'All Mail'} />
            <IconText icon = {'warning'} text = {'Spam'} community = {'FontAwesome'} />
            <IconText icon = {'trash'} text = {'Bin'} community = {'FontAwesome'} />
            <IconText icon = {'label'} text = {'Tigersheet'} />            
          </View>
          <View style = {{borderBottomColor: '#e5e5e5', borderBottomWidth: 1, paddingBottom: 10}}>
            <Text style = {{fontSize: 13, color: '#858585', paddingLeft: 10, paddingTop: 10, paddingBottom: 10}}> Google apps </Text>
            <IconText icon = {'calendar'} text = {'Calendar'} />
            <IconText icon = {'user-circle'} text = {'Contacts'} community = {'FontAwesome'} />
          </View>
          <View style = {{borderBottomColor: '#e5e5e5', borderBottomWidth: 1, paddingBottom: 10}}>
            <IconText icon = {'settings'} text = {'Settings'} />
            <IconText icon = {'question-circle'} text = {'Help & feedback'} community = {'FontAwesome'} />
          </View>  
        </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1 , 
    backgroundColor: '#FFFFFF'
  },
  insideContainer: {
    height: 150, 
    backgroundColor: '#f5f5f5'
  },
  backgroundImage: {
    height: 150, 
    width: '100%', 
    position: 'absolute', 
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  circle: {
    flex: 2, 
    paddingLeft: 15, 
    paddingTop: 5
  },
  mailContainer: {
    flex: 1, 
    flexDirection: 'row'
  },
  textContainer: {
    flex: 9, 
    paddingLeft: 10
  },
  iconContainer: {
    flex: 1, 
    alignItems: 'center',
    padding: 5
  },
  name: {
    color: 'white', 
    fontWeight: 'bold', 
    fontSize: 14
  },
  email: {
    color: '#e2e2e2', 
    fontSize: 14
  },
  icon: {
    color: 'white', 
    fontSize: 24
  }
});