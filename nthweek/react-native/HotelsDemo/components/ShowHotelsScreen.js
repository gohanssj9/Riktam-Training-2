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

import {ScrollView, FlatList} from 'react-native';

import FilterComponent from './FilterComponent';
import SingleHotelItem from './SingleHotelItem';
import hotelData from '../data.json';

export default class ShowHotelsScreen extends Component {
  render(){
    return (
       <Container>
        <Header style = {{backgroundColor: '#D32F2F', height: 113}} androidStatusBarColor = '#AF1D1F'>
          <Body>
            <View style = {{flex: 1, width: '100%', height: '100%', flexDirection: 'row'}}>
              <View style = {{flex: 2,}}>
                <Button transparent onPress = {() => {this.props.navigation.goBack()}}>
                  <Icon name = "arrow-back" style = {{color: 'white'}} />
                </Button>
              </View>
              <View style = {{flex: 8,}}>
                <View style = {{flex: 1, padding: 3}}>
                  <View style = {{flex: 1, marginTop: 5, justifyContent: 'center'}}>
                    <Text style = {{color: 'white', fontSize: 13}}> Hyderabad, India </Text>
                  </View>
                  <View style = {{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                    <Text style = {{color: 'white', fontSize: 13}}> Thu 1 Nov - Fri 2 Nov </Text>
                    <Icon name = "user" type = "Entypo" style = {{color: 'white', fontSize: 14}} />
                    <Text style = {{color: 'white', fontSize: 13}}> 2 </Text> 
                  </View>
                </View>
                <View style = {{flex: 1, justifyContent: 'center', alignItems: 'flex-start',}}>
                  <View style = {{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
                    <View style = {{backgroundColor: 'white', padding: 10, paddingTop: 5, paddingBottom: 5, borderRadius: 15, marginRight: 20}}>
                      <Text style = {{color: '#D32F2F', fontWeight: 'bold', fontSize: 13}}>ALL</Text>
                    </View>
                    <View style = {{flexDirection: 'row', justifyContent: 'center', alignItems: 'center',}}>
                      <View style = {{marginTop: 1}}>
                        <Icon name = "heart" type = "FontAwesome" style = {{color: 'white', fontSize: 15, marginRight: 5}} />
                      </View>
                      <Text style = {{color: 'white', fontWeight: 'bold', fontSize: 13}}>FAVOURITES</Text>
                      <Text style = {{color: 'white', fontWeight: 'bold', fontSize: 13}}> (0)</Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style = {{flex: 2, }}>
                <View style = {{padding: 8, paddingTop: 14, paddingLeft: 14}}>
                  <Text style = {{color: 'white', fontSize: 14, fontWeight: 'bold'}}> EDIT </Text>
                </View>
              </View>
            </View>
          </Body>
        </Header>
        <Content>
          <View style = {{height: 48, borderTopWidth: 0, elevation: 5, backgroundColor: '#FFFFFF',}}>
            <ScrollView horizontal showsHorizontalScrollIndicator = {false}>
              <FilterComponent text = {'Under Rs4000'} />
              <FilterComponent text = {'4★+'} />
              <FilterComponent text = {'4.0 +'} />
              <FilterComponent text = {'Free Breakfast'} />
              <FilterComponent text = {'Pool'} />
              <FilterComponent text = {'Free wifi'} />
              <FilterComponent text = {'Free Parking'} />
              <FilterComponent text = {'Pet Friendly'} />
            </ScrollView>
          </View>
          <View style = {{flex: 1, backgroundColor: '#E3DDCC', marginTop: 5}}>
            <FlatList
              data = {hotelData.items}
              renderItem = {(item) => <SingleHotelItem item = {item} />}
              keyExtractor = {(item) => item.id}
              ItemSeparatorComponent = {() => <View style = {{height: 0.5, backgroundColor: '#e5e5e5'}}></View>}
              initialNumToRender = {8}
              showsVerticalScrollIndicator = {false}
            />
          </View>
        </Content>
         <Footer>
          <FooterTab>
            <Button full style = {{backgroundColor: '#D32F2F', flexDirection: 'row'}}>
              <View style = {{flex: 6, justifyContent: 'center', alignItems: 'flex-end', }}>
                <Text style = {{color: 'white', fontSize: 15, fontFamily: 'RobotoLight', fontWeight: 'bold'}}>MAP</Text>
              </View>
              <View style = {{flex: 4, justifyContent: 'center', alignItems: 'flex-end',}}>
                <Text style = {{color: 'white', fontSize: 15, fontFamily: 'RobotoLight', fontWeight: 'bold'}}> SORT & FILTER </Text>
              </View>
              <View style = {{flex: 1, justifyContent: 'center', alignItems: 'flex-end', marginRight: 10}}>
                <Icon name = "dots-vertical" type = "MaterialCommunityIcons" style = {{color: 'white', fontSize: 24,}} />
              </View>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}