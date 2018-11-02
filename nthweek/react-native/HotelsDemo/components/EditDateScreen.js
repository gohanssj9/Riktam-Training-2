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

import {TextInput} from 'react-native';

export default class EditDateScreen extends Component {
  render(){
    return (
       <Container>
        <Header style = {{backgroundColor: 'white', elevation: 10}} androidStatusBarColor = '#999999'>
          <Body>
            <View style = {{flex: 1, width: '100%', height: '100%', flexDirection: 'row'}}>
              <View style = {{flex: 1, justifyContent: 'center',}}>
                <Button transparent onPress = {() => {this.props.navigation.goBack()}}>
                  <Icon name="arrow-back" style = {{color: '#858585'}} />
                </Button>
              </View>
              <View style = {{flex: 4, width: '100%', justifyContent: 'center'}}>
                <TextInput underlineColorAndroid='transparent' style = {{fontFamily: 'RobotoLight', fontSize: 17, paddingBottom: 5, width: '100%',}} value = {'Hyderabad, India'}/>
              </View>
              <View style = {{flex: 1, justifyContent: 'flex-end', alignSelf: 'center', flexDirection: 'row'}}>
                <Button transparent>
                  <Icon name = "md-close-circle" type = "Ionicons" style = {{color: '#858585', fontSize: 18, marginRight: 0}} />
                </Button>
              </View>
            </View>
          </Body>
        </Header>
        <Content style = {{backgroundColor: '#E8E8E8', marginTop: 7}}>
          <View style = {{height: 150, margin: 7, marginTop: 0, flexDirection: 'row'}}>
            <View style = {{flex: 1, backgroundColor: 'white', marginRight: 3, borderRadius: 5, elevation: 3}}>
              <View style = {{flex: 1, borderBottomColor: '#e5e5e5', borderBottomWidth: 1, justifyContent: 'center', paddingLeft: 12,}}>
                <Text style = {{fontSize: 20, fontFamily: 'RobotoLight'}}> Check in </Text>
              </View>
              <View style = {{flex: 2}}>
                <View style = {{padding: 11, paddingLeft: 15}}>
                  <Text style = {{fontSize: 20, color: '#156BC1'}}>Today</Text>
                  <Text style = {{fontSize: 14, color: '#156BC1'}}>01-Nov-2018</Text>
                </View>
              </View>
            </View>
            <View style = {{flex: 1, marginLeft: 3, backgroundColor: 'white', borderRadius: 5, elevation: 3}}>
              <View style = {{flex: 1, borderBottomColor: '#e5e5e5', borderBottomWidth: 1, justifyContent: 'center', paddingLeft: 12,}}>
                <Text style = {{fontSize: 20, fontFamily: 'RobotoLight'}}> Check out </Text>
              </View>
              <View style = {{flex: 2,}}>
                <View style = {{padding: 11, paddingLeft: 15}}>
                  <Text style = {{fontSize: 20, color: '#156BC1'}}>Tomorrow</Text>
                  <Text style = {{fontSize: 14, color: '#156BC1'}}>02-Nov-2018</Text>
                  <Text style = {{fontSize: 13, fontFamily: 'RobotoLight', marginTop: 10, color: '#858585'}}>1 night</Text>
                </View>
              </View>
            </View>
          </View>
          <View style = {{height: 198, margin: 7, marginTop: 3, backgroundColor: 'white', borderRadius: 5, elevation: 3}}>
            <View style = {{flex: 1.25, borderBottomColor: '#e5e5e5', borderBottomWidth: 1, justifyContent: 'center', paddingLeft: 12,}}>
              <Text style = {{fontSize: 20, fontFamily: 'RobotoLight'}}> Room 1 </Text>
            </View>
            <View style = {{flex: 2, borderBottomColor: '#e5e5e5', borderBottomWidth: 1,}}>
              <View style = {{flex: 1, borderBottomColor: '#e5e5e5', borderBottomWidth: 1, padding: 5, flexDirection: 'row', alignItems: 'center'}}>
                <Text style = {{flex: 2, paddingLeft: 10}}> Adults </Text>
                <View style = {{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                  <View style = {{flex: 1}}>
                    <Icon name = 'minus-circle-outline' type = "MaterialCommunityIcons" style = {{color: '#156BC1', fontSize: 22}} />
                  </View>
                  <Text style = {{flex: 1}}> 2 </Text>
                  <View style = {{flex: 1}}>
                    <Icon name = 'plus-circle-outline' type = "MaterialCommunityIcons" style = {{color: '#156BC1', fontSize: 22}} />
                  </View>
                </View>
              </View>
              <View style = {{flex: 1, padding: 5, flexDirection: 'row', alignItems: 'center'}}>
                <Text style = {{flex: 2, paddingLeft: 8}}> Children </Text>
                <View style = {{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                  <View style = {{flex: 1}}>
                    <Icon name = 'minus-circle-outline' type = "MaterialCommunityIcons" style = {{color: '#156BC1', fontSize: 22}} />
                  </View>
                  <Text style = {{flex: 1}}> 0 </Text>
                  <View style = {{flex: 1}}>
                    <Icon name = 'plus-circle-outline' type = "MaterialCommunityIcons" style = {{color: '#156BC1', fontSize: 22}} />
                  </View>
                </View>
              </View>
            </View>
            <View style = {{flex: 1.25, alignItems: 'flex-end', justifyContent: 'center', paddingRight: 12}}>
              <Text style = {{fontSize:14, color: '#156BC1'}}> ADD ANOTHER ROOM </Text>
            </View>
          </View>
        </Content>
        <Footer height = {47}>
          <FooterTab>
            <Button full style = {{backgroundColor: '#156BC1'}}>
              <Text style = {{fontFamily: 'RobotoLight', fontSize: 15, fontWeight: 'bold', color: 'white'}}>Show Deals</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

