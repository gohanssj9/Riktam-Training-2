import React, {Component} from 'react';

import {View, Text} from 'native-base';
import {StyleSheet} from 'react-native';

export default class SingleItem extends Component {
	render(){
		let item = this.props.item;
		console.log(item.item.sender)
		return (
			<View style = {styles.container}>
				<View style = {styles.outerDiv}>
					<View 
						style = {{
							width: 44, 
							height: 44, 
							borderRadius: 22, 
							backgroundColor: item.item.backgroundColor, 
							justifyContent: 'center',
							marginBottom: 5}}>
						<Text style = {styles.innerText}> {item.item.sender[0]} </Text>
					</View>
				</View>
				<View style = {styles.outerSecondDiv}>
					<View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>
						<Text style = {{textAlign: 'left', fontFamily: 'RobotoM', color: 'black'}}> {item.item.sender} </Text>
						<Text style = {{fontFamily: 'RobotoMe', fontSize: 12, marginRight: 3}}> {item.item.timeSent} </Text>
					</View>
					<Text style = {{fontFamily: 'RobotoMe', fontSize: 14}}> {item.item.title} </Text>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
  container: {
		height: 86, 
		flexDirection: 'row', 
		justifyContent: 'center',
  },
  outerDiv: {
  	width: 80, 
  	height: 86, 
  	justifyContent: 'center', 
  	alignItems: 'center',
  	backgroundColor: 'black'
  },
  innerText: {
  	color: 'white', 
  	textAlign: 'center', 
  	fontSize: 28,
  	fontFamily: 'RobotoM'
  },
  outerSecondDiv: {
  	flex: 4,
  	padding: 10,
  },
});
