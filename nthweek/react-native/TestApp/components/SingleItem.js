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
					<View style = {styles.firstViewInSecondDiv}>
						<Text style = {styles.sender}> {item.item.sender} </Text>
						<Text style = {styles.timeSent}> {item.item.timeSent} </Text>
					</View>
					<Text numberOfLines = {1} style = {styles.title}> {item.item.title}</Text>
					<View style = {styles.secondViewInSecondDiv}>
						<Text numberOfLines = {1} style = {styles.body}>{item.item.body}</Text>
						<Icon name = "star" type = "EvilIcons" style = {styles.starIcon} />
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
  	marginLeft: 4,
  	fontFamily: 'RobotoMe', 
  	flex: 8, 
  	fontSize: 14
  },
  starIcon: {
  	flex: 1, 
  	fontSize: 22, 
  	color: '#858585'
  }
});
