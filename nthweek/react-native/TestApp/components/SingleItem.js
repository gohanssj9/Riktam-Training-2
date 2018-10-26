import React, {Component} from 'react';
import {View, Text, Icon} from 'native-base';
import {StyleSheet, TouchableNativeFeedback} from 'react-native';

import CircleText from './CircleText';

export default class SingleItem extends Component {
	render(){
		let item = this.props.item;
		console.log(item.item.sender)
		return (
      <TouchableNativeFeedback borderLess = {false}>
  			<View style = {styles.container}>
          <CircleText 
            text = {item.item.sender[0]} 
            background_color = {item.item.backgroundColor} 
            width = {44} 
            height = {44} 
            marginBottom = {15} 
          /> 
  				<View style = {styles.outerSecondDiv}>
  					<View style = {styles.firstViewInSecondDiv}>
  						<Text style = {styles.sender}> {item.item.sender} </Text>
  						<Text style = {styles.timeSent}> {item.item.timeSent} </Text>
  					</View>
  					<Text numberOfLines = {1} style = {styles.title}> {item.item.title}</Text>
  					<View style = {styles.secondViewInSecondDiv}>
  						<Text numberOfLines = {1} style = {styles.body}> {item.item.body} </Text>
  						<Icon name = "star" type = "EvilIcons" style = {styles.starIcon} />
  					</View>
  				</View>
  			</View>
      </TouchableNativeFeedback>
		);
	}
}

const styles = StyleSheet.create({
  container: {
		height: 86, 
		flexDirection: 'row', 
		justifyContent: 'center',
  },
  outerSecondDiv: {
  	flex: 4,
  	padding: 10,
  },
  firstViewInSecondDiv: {
  	flexDirection: 'row', 
  	justifyContent: 'space-between',
  	alignItems: 'center'
  },
  secondViewInSecondDiv: {
  	flexDirection: 'row', 
  	justifyContent: 'space-between',
  },
  sender: {
  	textAlign: 'left', 
  	fontFamily: 'RobotoM'
  },
  timeSent: {
  	fontFamily: 'RobotoMe', 
  	fontSize: 12, 
  	marginRight: 3,
  	color: '#353535'
  },
  title: {
  	fontFamily: 'RobotoMe', 
  	fontSize: 14, 
  	flex: 1, 
  	textAlign: 'left'
  },
  body: {
  	fontFamily: 'RobotoMe', 
  	flex: 8, 
  	fontSize: 14,
    marginBottom: 5
  },
  starIcon: {
  	flex: 1, 
  	fontSize: 26, 
  	color: '#858585'
  }
});
