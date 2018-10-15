import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, FlatList} from 'react-native';
import {Button, TouchableOpacity} from 'react-native';

import AddDepartment from './AddDepartment';
import EditDepartment from './EditDepartment';
import ViewDepartment from './ViewDepartment';

export default class GetDepartments extends Component{
  static navigationOptions = {
    title: 'Departments',
  };
  
  constructor(props){
    super(props);

    this.state = {
      departments: [],
      isFetchingData: false,
    };

    this.onRefresh = this.onRefresh.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }

  onRefresh(){
    console.log("Inside onRefresh");
    this.setState({isFetchingData: true}, function(){
      fetch('http://testbed2.riktamtech.com:3000/departments')
      .then(response => response.json())
      .then(departments => {
        console.log(departments);
        this.setState({departments: JSON.parse(departments), isFetchingData: false});
      })
      .catch(error => {console.log(error)});
    });
  }

  onDelete(id){
    const url = 'http://testbed2.riktamtech.com:3000/departments/' + id; 
    fetch(url, {
      method: 'DELETE'
    })
      .then(response => response.json())
      .then(returnedId => {
        const {departments} = this.state;
        const isNotId = item => item.id != parseInt(returnedId, 10);
        const updatedDepartments = departments.filter(isNotId);
        this.setState({departments: updatedDepartments});
      })
      .catch(error => {console.log(error)}
    );
  }

  componentDidMount(){
    fetch('http://testbed2.riktamtech.com:3000/departments')
      .then(response => response.json())
      .then(departments => {
        this.setState({departments: JSON.parse(departments)});
      })
      .catch(error => {console.log(error)});
  }

  componentDidUpdate(previousProps, previousState) {
    if (previousProps.navigation !== this.props.navigation) {
      if(this.props.navigation.getParam('funcType') === 'Add'){
        const {navigation} = this.props;
        if(typeof navigation.getParam('singleDepartment') !== 'undefined'){
          const singleDepartment = navigation.getParam('singleDepartment');
          const {departments} = this.state;
          this.setState({departments: [...departments, singleDepartment[0]]});
        }
      }
      else if(this.props.navigation.getParam('funcType') === 'Edit'){
        const {navigation} = this.props;
        if(typeof navigation.getParam('singleDepartment') !== 'undefined'){
          const singleDepartment = navigation.getParam('singleDepartment');
          const {departments} = this.state;
          const updatedDepartments = departments.map(function(item){
            if(item.id === singleDepartment[0].id){
              item.title = singleDepartment[0].title;
              item.body = singleDepartment[0].body;
              return item;
            }
            return item;
          });
          this.setState({departments: updatedDepartments});
        }
      }
    }
  }

  render() {
    return (
      <View style = {styles.container}>
        <FlatList data = {this.state.departments} showsVerticalScrollIndicator = {false}
          renderItem = {({item}) => 
            <View style = {styles.flatview}>
              <Text style = {styles.body} > {item.body} </Text>
              <View style = {styles.buttonContainer}>
                <View style = {styles.indiButton}>
                  <Button title = "View" color = 'blue' onPress = {() => {this.props.navigation.navigate('ViewDepartment', {departmentId: item.id})}} />
                </View>
                <View style = {styles.indiButton}>
                  <Button title = "Edit" color = 'black' onPress={() => {this.props.navigation.navigate('EditDepartment', {itemId: item.id, itemTitle: item.title, itemBody: item.body,}); }} />
                </View>
                <View style = {styles.indiButton}>
                  <Button title = "Delete" color = 'red' onPress = {() => this.onDelete(item.id)} />
                </View>
              </View>
            </View>
          }
          keyExtractor = {(item, id) => id.toString()}
          onRefresh = {this.onRefresh}
          refreshing = {this.state.isFetchingData}
        />
        
        <TouchableOpacity style = {{height: 60, marginTop: 10, backgroundColor: 'darkseagreen', alignItems: 'center', justifyContent:'center'}} 
          onPress = {() => this.props.navigation.navigate('AddDepartment')}>
          <Text style = {{fontSize: 24, fontWeight: 'bold', color: 'white'}}> Add Department </Text>
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