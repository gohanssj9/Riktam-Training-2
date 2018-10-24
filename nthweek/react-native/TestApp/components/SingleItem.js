import React, {Component} from 'react';

import {View, Text} from 'native-base';
import {StyleSheet, } from 'react-native';

export default class SingleItem extends Component {
	render(){
		let item = this.props.item;
		return (
			<View style = {{height: 90, backgroundColor: item.item.backgroundColor, flexDirection: 'row'}}>
				<View style = {{borderRadius: 45, flex: 1}}>
					<Text style = {{color: '#FFFFFF'}}> Hello, World! </Text>
				</View>
				<Text style = {{color: '#000000', backgroundColor: '#FFFFFF', flex: 4}}> Hello, react-native </Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
  container: {
    height: 90,
    backgroundColor: '#FFFFFF'
  },
});
