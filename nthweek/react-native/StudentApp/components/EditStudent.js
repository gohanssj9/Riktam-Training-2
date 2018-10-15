import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput} from 'react-native';
import {Button, TouchableOpacity} from 'react-native';

export default class EditStudent extends Component{
  static navigationOptions = {
    title: 'EditStudent',
  };

  constructor(props){
    super(props);

    this.state = {
      name: '',
      age: '',
    };
    
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(id, department_id){
    const {name, age} = this.state;

    var data = {
      name: name,
      age: age
    };

    const itemEdited = [{
      id: id,
      name: name,
      age: age,
      department_id: department_id
    }];

    const url = 'http://testbed2.riktamtech.com:3000/students/' + id;

    fetch(url,{
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(returnedSingleStudent => {
        console.log(returnedSingleStudent);
        console.log(itemEdited);
        this.props.navigation.navigate('ViewDepartment', {singleStudent: itemEdited, funcType: 'EditStudent'});
      })
      .catch(error => {console.log(error)});
  }

  render() {
    const {navigation} = this.props;
    const itemId = navigation.getParam('itemId', '0');
    const itemName = navigation.getParam('itemName', 'None');
    const itemAge = navigation.getParam('itemAge', 'None');
    const itemDepartmentId = navigation.getParam('itemDepartmentId', '0');
    return (
      <View style = {styles.container}>
        <TextInput style = {styles.textInputStyle} placeholder = {itemName} onChangeText = {(name) => this.setState({name})} />
        <TextInput style = {styles.textInputStyle} placeholder = {itemAge} onChangeText = {(age) => this.setState({age})} />
        <Button style = {styles.indiButton} title = "Update" color = "blue" onPress = {() => {this.handleSubmit(itemId, itemDepartmentId)}} />
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