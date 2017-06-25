import React, { Component } from 'react';
import { AppRegistry, Text, View, Image, Button } from 'react-native'

export default class Component2 extends Component {


    handlePress() {
        console.log('btn is clicked');
    }
    render() {
        let pic = {
            uri: '../img/1.jpg'
        }
        return (
            <View>
              <Text>Helo Media</Text>
              <Image style={ { width: 100, height: 100 } } source={ require("../../../img/1.jpg") }></Image>
              <Image style={ { width: 100, height: 100 } } source={ { uri: 'https://facebook.github.io/react/img/logo_og.png' } }></Image>
              <Button color='red' title="clickMe" onPress={ this.handlePress }></Button>
            </View>
            );
    }
}
// AppRegistry.registerComponent('Component2', () => Component2);