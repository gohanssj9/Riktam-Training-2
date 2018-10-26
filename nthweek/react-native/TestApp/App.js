import React, {Component} from 'react';
import {
  Container, 
  Header, 
  Title, 
  Content, 
  Footer, 
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  View,
  Text,
  Drawer,
  Fab } from 'native-base';

import MainComponent from './components/MainComponent';
import SideBar from './components/SideBar';
export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      active: true
    };
    Drawer.defaultProps.styles.mainOverlay.elevation = 0;
  }
  render() {
    closeDrawer = () => {
      this._drawer._root.close();
    };

    openDrawer = () => {
      this._drawer._root.open();
    };
    return (
      <Drawer
        ref = {(ref) => {this._drawer = ref;}}
        content = {<SideBar />}
        onClose = {() => closeDrawer()}
        tweenDuration = {250}
        tweenEasing = {'easeOutCubic'} >

        <MainComponent openDrawer = {() => openDrawer()} />
        <Fab
          active = {this.state.active}
          direction = "up"
          containerStyle = {{}}
          style = {{backgroundColor: '#dd4b39'}}
          position = "bottomRight"
          onPress = {() => this.setState({active: !this.state.active})}>
            <Icon name="pencil" type = "MaterialCommunityIcons" onPress = {() => {console.log("Here!")}}/>
        </Fab>
      </Drawer>
    );
  }
}

/*
import CameraRollPicker from 'react-native-camera-roll-picker';
  getSelectedImages(image){
    console.log("Inside getSelectedImages");
    console.log(image);
    if(image[0])
      alert(image[0].uri);
  }
      <CameraRollPicker callback = {this.getSelectedImages} />
*/