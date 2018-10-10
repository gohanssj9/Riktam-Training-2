import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput} from 'react-native';
import {Button, TouchableOpacity} from 'react-native';

export default class AddDepartment extends Component{
  static navigationOptions = {
    title: 'AddDepartment',
  };

  constructor(props){
    super(props);

    this.state = {
      title: '',
      body: '',
    };
    
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(){
    const {title, body} = this.state;

    var data = {
      title: title,
      body: body
    };

    const url = 'http://192.168.10.196:8000/departments';

    fetch(url,{
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(returnedSingleDepartment => {
        console.log(returnedSingleDepartment);
        const returnedDepartment = JSON.parse(returnedSingleDepartment);
        this.props.navigation.navigate('Departments', {singleDepartment: returnedDepartment, funcType: 'Add'});
      })
      .catch(error => {console.log(error)});
  }

  render() {
    return (
      <View style = {styles.container}>
        <TextInput style = {styles.textInputStyle} placeholder = "Enter the Title" onChangeText = {(title) => this.setState({title})} />
        <TextInput style = {styles.textInputStyle} placeholder = "Enter the Body" onChangeText = {(body) => this.setState({body})} />
        <Button style = {styles.indiButton} title = "Submit" color = "blue" onPress = {this.handleSubmit} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#ffffff',
  },

  h2text: {
    marginTop: 10,
    fontFamily: 'Helvetica',
    fontSize: 36,
    fontWeight: 'bold',
  },
  flatview: {
    justifyContent: 'center',
    paddingTop: 30,
    borderRadius: 2,
  },
  body: {
    fontFamily: 'Helvetica',
    fontSize: 24,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    margin: 10,
  },
  indiButton: {
    flex: 1,
  },
  textInputStyle: {
    margin: 15, 
    height: 40, 
    borderColor: '#7a42f4', 
    borderWidth: 1,
  },
});