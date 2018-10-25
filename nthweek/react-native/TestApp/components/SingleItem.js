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
				<View style = {styles.outerSecondDiv}></View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
  container: {
		height: 90, 
		flexDirection: 'row', 
		justifyContent: 'center'
  },
  outerDiv: {
  	width: 90, 
  	height: 90, 
  	justifyContent: 'center', 
  	alignItems: 'center'
  },
  innerText: {
  	color: 'white', 
  	textAlign: 'center', 
  	fontSize: 28
  },
  outerSecondDiv: {
  	flex: 4
  },
});
