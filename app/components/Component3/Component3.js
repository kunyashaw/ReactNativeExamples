import React, { Component } from 'react';
import { AppRegistry, Text, View, DrawerLayoutAndroid, TouchableHighlight } from 'react-native'

export default class Component3 extends Component {
  openDrawer = () => {
    this.refs.DRAWER.openDrawer()
  }
  render() {
    var navigationView = (
    <View style={ { flex: 1, backgroundColor: '#fff' } }>
      <Text style={ { margin: 10, fontSize: 15, textAlign: 'left' } }>I'm in the Drawer!</Text>
    </View>
    );
    return (
      <DrawerLayoutAndroid drawerWidth={ 100 } ref='DRAWER' drawerPosition={ DrawerLayoutAndroid.positions.Right } renderNavigationView={ () => navigationView }>
        <View style={ { flex: 1, alignItems: 'center' } }>
          <Text style={ { margin: 10, fontSize: 15, textAlign: 'right' } }>Hello</Text>
          <Text style={ { margin: 10, fontSize: 15, textAlign: 'right' } }>World!</Text>
          <TouchableHighlight onPress={ this.openDrawer }>
            <Text>
              Open Drawer
            </Text>
          </TouchableHighlight>
        </View>
      </DrawerLayoutAndroid>
      );
  }
}