import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, FlatList} from 'react-native';
import {Button, TouchableOpacity} from 'react-native';

import AddStudent from './AddStudent';
import EditStudent from './EditStudent';

export default class ViewDepartment extends Component{
  static navigationOptions = {
    title: 'Students',
  };
  
  constructor(props){
    super(props);

    this.state = {
      students: [],
    };
    this.onDelete = this.onDelete.bind(this);
  }

  // onRefresh(){
  //   console.log("Inside onRefresh - ViewDepartment");
  //   this.setState({isFetchingData: true}, function(){
  //     fetch('http://192.168.10.196:8000/departments')
  //     .then(response => response.json())
  //     .then(departments => {
  //       console.log(departments);
  //       this.setState({departments: JSON.parse(departments), isFetchingData: false});
  //     })
  //     .catch(error => {console.log(error)});
  //   });
  // }

  onDelete(id){
    const url = 'http://testbed2.riktamtech.com:3000/students/' + id; 
    fetch(url, {
      method: 'DELETE'
    })
      .then(response => response.json())
      .then(returnedId => {
        const {students} = this.state;
        const isNotId = item => item.id != parseInt(returnedId, 10);
        const updatedStudents = students.filter(isNotId);
        this.setState({students: updatedStudents});
      })
      .catch(error => {console.log(error)}
    );
  }

  componentDidMount(){
    const {navigation} = this.props;
    const departmentId = navigation.getParam('departmentId');
    const url = 'http://testbed2.riktamtech.com:3000/departments/' + departmentId + '/students'; 
    fetch(url)
      .then(response => response.json())
      .then(students => {
        this.setState({students: JSON.parse(students)});
      })
      .catch(error => {console.log(error)});
  }

  componentDidUpdate(previousProps, previousState) {
    if (previousProps.navigation !== this.props.navigation) {
      if(this.props.navigation.getParam('funcType') === 'AddStudent'){
        const {navigation} = this.props;
        if(typeof navigation.getParam('singleStudent') !== 'undefined'){
          const singleStudent = navigation.getParam('singleStudent');
          const {students} = this.state;
          this.setState({students: [...students, singleStudent[0]]});
        }
      }
      else if(this.props.navigation.getParam('funcType') === 'EditStudent'){
        const {navigation} = this.props;
        if(typeof navigation.getParam('singleStudent') !== 'undefined'){
          const singleStudent = navigation.getParam('singleStudent');
          const {students} = this.state;
          const updatedStudents = students.map(function(item){
            if(item.id === singleStudent[0].id){
              item.name = singleStudent[0].name;
              item.age = singleStudent[0].age;
              return item;
            }
            return item;
          });
          this.setState({students: updatedStudents});
        }
      }
    }
  }

  render() {
    const {navigation} = this.props;
    const department_id = navigation.getParam('departmentId');
    return (
      <View style = {styles.container}>
        <FlatList data = {this.state.students} showsVerticalScrollIndicator = {false}
          renderItem = {({item}) => 
            <View style = {styles.flatview}>
              <Text style = {styles.body} > {item.name} </Text>
              <View style = {styles.buttonContainer}>
                <View style = {styles.indiButton}>
                  <Button title = "Edit" color = 'black' onPress={() => {this.props.navigation.navigate('EditStudent', {itemId: item.id, itemName: item.name, itemAge: item.age, itemDepartmentId: item.department_id})}} />
                </View>
                <View style = {styles.indiButton}>
                  <Button title = "Delete" color = 'red' onPress = {() => this.onDelete(item.id)} />
                </View>
              </View>
            </View>
          }
          keyExtractor = {(item, id) => id.toString()}
        />
        
        <TouchableOpacity style = {{height: 60, marginTop: 10, backgroundColor: 'salmon', alignItems: 'center', justifyContent:'center'}} 
          onPress = {() => {this.props.navigation.navigate('AddStudent', {departmentId: department_id})}}>
          <Text style = {{fontSize: 24, fontWeight: 'bold', color: 'white'}}> Add Student </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#f5fcff',
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
  }
});