import React, {Component} from 'react';
import {View, Text, Icon} from 'native-base';
import {StyleSheet, TouchableNativeFeedback} from 'react-native';

export default class SearchText extends Component {
  render(){
    const {icon = 'history', text, color = '#858585', community = 'MaterialCommunityIcons'} = this.props;
    return (
      <TouchableNativeFeedback borderLess = {false}>
        <View style = {styles.container}>
          <View style = {styles.iconView}>
            <Icon name = {icon} type = {community} style = {{fontSize: 24, color: color}} />
          </View>
          <Text style = {styles.textView}> {text} </Text>
        </View>
      </TouchableNativeFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 55, 
    padding: 10, 
    flexDirection: 'row', 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  iconView: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'flex-start', 
    marginLeft: 3
  },
  textView: {
    flex: 4,
    fontSize: 14.5, 
    paddingTop: 2, 
    justifyContent: 'center',
    color: '#858585'
  }
});