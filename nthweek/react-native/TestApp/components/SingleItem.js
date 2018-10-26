import React, {Component} from 'react';

import {View, Text, Icon} from 'native-base';
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
						<Text style = {{textAlign: 'left', fontFamily: 'RobotoM'}}> {item.item.sender} </Text>
						<Text style = {{fontFamily: 'RobotoMe', fontSize: 12, marginRight: 3}}> {item.item.timeSent} </Text>
					</View>
					<Text numberOfLines = {1} style = {{fontFamily: 'RobotoMe', fontSize: 14, flex: 1, textAlign: 'left'}}> {item.item.title}</Text>
					<View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>
						<Text numberOfLines = {1} style = {{marginLeft: 4,fontFamily: 'RobotoMe', flex: 8, fontSize: 14}}>{item.item.body}</Text>
						<Icon name = "star" type = "EvilIcons" style = {{flex: 1, fontSize: 22, color: '#858585'}} />
					</View>
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
  outerSecondDiv: {
  	flex: 4,
  	padding: 10,
  },
});
