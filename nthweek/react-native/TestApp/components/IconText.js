import React, {Component} from 'react';
import {View, Text, Icon} from 'native-base';
import {StyleSheet, TouchableNativeFeedback} from 'react-native';

export default class IconText extends Component {
	render(){
		const {icon, text, color = '#858585', community = 'MaterialCommunityIcons'} = this.props;
		return (
	    <View style = {{height: 45, padding: 10, flexDirection: 'row', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
	    	<View style = {{flex: 1, justifyContent: 'center', alignItems: 'flex-start', marginLeft: 3}}>
	    		<Icon name = {icon} type = {community} style = {{fontSize: 24, color: color}} />
	    	</View>
	    	<Text style = {{flex: 4,fontSize: 14.5, paddingTop: 2, justifyContent: 'center'}}> {text} </Text>
	    </View>
		);
	}
}