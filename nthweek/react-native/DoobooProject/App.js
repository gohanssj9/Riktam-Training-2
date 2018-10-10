/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {AppRegistry, Image, TextInput, Alert, Button, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback} from 'react-native';
import {ScrollView, FlatList,ActivityIndicator} from 'react-native';

export default class App extends Component<Props> {
  constructor(props){
    super(props);
    this.state = {
      isLoading: true
    };
  }

  componentDidMount(){
    console.log("Inside componentDidMount");
    return fetch('http://192.168.10.212:8000/departments')
      .then((response) => response.json())
      .then(responseJson => {
        console.log(responseJson);
        this.setState({
          isLoading: false,
          dataSource: JSON.parse(responseJson),
        }, function(){

        });
      })
      .catch(error => {console.log(error);});
  }
  render() {
    console.log(this.state.dataSource);
    console.log("Inside render");
    if(this.state.isLoading){
      return (
        <View style = {{flex: 1, padding: 20}}>
          <ActivityIndicator />
        </View> 
      )
    }

    return (
      <View style = {{flex: 1, padding: 20}}>
        <Text style = {{flex: 1, fontSize: 24}}> Student Application </Text>
        <FlatList data = {this.state.dataSource}
          renderItem = {({item}) => <Text> {item.title}, {item.body} </Text>}
          keyExtractor = {({id}, index) => id}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 36,
    height: 200,
  },
});

        // <Text style={styles.welcome}>Welcome to React Native!</Text>
        // <Text style={styles.instructions}>To get started, edit App.js</Text>
        // <Text style={styles.instructions}>{instructions}</Text>

 //       <Text> Hello, World, Hello React Native</Text>
 //        <Image source = {pic} style = {styles.imageContainer} />
 //    let pic = {
 //   uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
 // };
 


  // constructor(props){
  //   super(props);
  //   this.state = {
  //     text: ''
  //   };
  // }
 //        <TextInput style = {{height: 40}} placeholder = "Type here to translate!" onChangeText = {(text) => this.setState({text})} />
 //        <Text style = {{padding: 10, fontSize: 42}}>
 //          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
 //          </Text>
 // 

        //  <View style = {styles.buttonContainer}>
        //   <Button onPress = {this._onPressButton} title = "Click me!" />
        // </View>

        // <View style = {styles.buttonContainer}>
        //   <Button onPress = {this._onPressButton} title = "Click me!" color= '#841584' />
        // </View>

        // <View style = {styles.alternativeLayoutButtonContainer}>
        //   <Button onPress = {this._onPressButton} title = "This is great! A Button" />
        //   <Button onPress = {this._onPressButton} title = "Ok!" color = '#841584' />
        // </View>



  // _onPressButton(){
  //   Alert.alert('Tapping a button.')
  // }

  // _onLongPressButton(){
  //   Alert.alert('You pressed a long button.');
  // }
  //     <View style={styles.container}>
  //       <TouchableHighlight onPress = {this._onPressButton} underlayColor = 'white'>
  //         <View style = {styles.button}>
  //           <Text style = {styles.buttonText}> TouchableHighlight </Text>
  //         </View>
  //       </TouchableHighlight>
  //       <TouchableOpacity onPress = {this._onPressButton}>
  //         <View style = {styles.button}>
  //           <Text style = {styles.buttonText}> TouchableOpacity </Text>
  //         </View>
  //       </TouchableOpacity>
  //       <TouchableNativeFeedback onPress = {this._onPressButton} background = {Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground(): ''}>
  //         <View style = {styles.button}>
  //           <Text style = {styles.buttonText}> TouchableNativeFeedback </Text>
  //         </View>
  //       </TouchableNativeFeedback>
  //       <TouchableWithoutFeedback onPress = {this._onPressButton} >
  //         <View style = {styles.button}>
  //           <Text style = {styles.buttonText}> TouchableWithoutFeedback </Text>
  //         </View>
  //       </TouchableWithoutFeedback>
  //       <TouchableHighlight onPress = {this._onPressButton} onLongPress = {this._onLongPressButton} underlayColor = 'white'>
  //         <View style = {styles.button}>
  //           <Text style = {styles.buttonText}> Touchable with Long Press </Text>
  //         </View>
  //       </TouchableHighlight>
  //     </View>


      // <ScrollView>
      //   <Text style = {{fontSize: 96}}> Scroll Me </Text>
      //   <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
      //   <Text style = {{fontSize: 96}}> Scroll Me </Text>
      //   <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
      //   <Text style = {{fontSize: 96}}> Scroll Me </Text>
      //   <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
      //   <Text style = {{fontSize: 96}}> Scroll Me </Text>
      //   <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
      //   <Text style = {{fontSize: 96}}> Scroll Me </Text>
      //   <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
      // </ScrollView>


      // <View style = {styles.container}>
      //   <FlatList
      //     data = {[ 
      //       {key: 'Devin'},
      //       {key: 'Jackson'},
      //       {key: 'Jane'},
      //       {key: 'Joel'},
      //       {key: 'John'},
      //       {key: 'Jillian'},
      //       {key: 'Jimmy'},
      //       {key: 'Julie'},
      //       ]}
      //       renderItem = {({item}) => <Text style = {styles.item} > {item.key} </Text>}
      //   />
      // </View>