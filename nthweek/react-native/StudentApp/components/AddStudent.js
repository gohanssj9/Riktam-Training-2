import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput} from 'react-native';
import {Button, TouchableOpacity} from 'react-native';

export default class AddStudent extends Component{
  static navigationOptions = {
    title: 'AddStudent',
  };

  constructor(props){
    super(props);

    this.state = {
      name: '',
      age: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(id){
    const {name, age} = this.state;

    var data = {
      name: name,
      age: age,
      department_id: id
    };

    fetch('http://testbed2.riktamtech.com:3000/students',{
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(returnedSingleStudent => {
        const returnedStudent = JSON.parse(returnedSingleStudent);
        this.props.navigation.navigate('ViewDepartment', {singleStudent: returnedStudent, funcType: 'AddStudent'});
      })
      .catch(error => {console.log(error)});
  }

  render() {
    const {navigation} = this.props;
    const department_id = navigation.getParam('departmentId');
    return (
      <View style = {styles.container}>
        <TextInput style = {styles.textInputStyle} placeholder = "Enter the Name" onChangeText = {(name) => this.setState({name})} />
        <TextInput style = {styles.textInputStyle} placeholder = "Enter the Age" onChangeText = {(age) => this.setState({age})} />
        <Button style = {styles.indiButton} title = "Submit" color = "blue" onPress = {() => {this.handleSubmit(department_id)}} />
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
    borderColor: '#FF0000', 
    borderWidth: 1,
  },
});