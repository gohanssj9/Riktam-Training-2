import React, {Component} from 'react';
import {View, Text, Icon} from 'native-base';
import {StyleSheet, TouchableNativeFeedback} from 'react-native';

export default class CircleTest extends Component {
	render() {
		const {text, background_color, width, height, marginBottom} = this.props;
		return (
	    <View style = {styles.outerDiv}>
	      <View 
	        style = {{
	          width: width, 
	          height: height, 
	          borderRadius: width/2, 
	          backgroundColor: background_color, 
	          justifyContent: 'center', 
	          marginBottom: marginBottom
	        }}>
	        <Text style = {styles.innerText}> {text} </Text>
	      </View>
	    </View>
		);
	}
}

const styles = StyleSheet.create({
  outerDiv: {
    width: 55, 
    height: 86, 
    justifyContent: 'center', 
    alignItems: 'flex-end',
  },
  innerText: {
    color: 'white', 
    textAlign: 'center', 
    fontSize: 28,
    fontFamily: 'RobotoM'
  },
});