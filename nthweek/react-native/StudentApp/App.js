import React, {Component} from 'react';
import {createStackNavigator} from 'react-navigation';

import GetDepartments from './components/GetDepartments';
import AddDepartment from './components/AddDepartment';
import EditDepartment from './components/EditDepartment';
import ViewDepartment from './components/ViewDepartment';
import AddStudent from './components/AddStudent';
import EditStudent from './components/EditStudent';

const RootStack = createStackNavigator(
  {
    Departments: {
      screen: GetDepartments
    },
    AddDepartment: {
      screen: AddDepartment
    },
    EditDepartment: {
      screen: EditDepartment
    },
    ViewDepartment: {
      screen: ViewDepartment
    },
    AddStudent: {
      screen: AddStudent
    },
    EditStudent: {
      screen: EditStudent
    },
  },
  {
    initialRouteName: 'Departments'
  }
);

export default class App extends Component {
  render(){
    return <RootStack />;
  }
}