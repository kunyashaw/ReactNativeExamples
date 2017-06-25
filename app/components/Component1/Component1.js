import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native'

export default class Component1 extends Component {
    constructor() {
        super();
        this.state = {
            name: 'zhangsan',
            showName: true
        }
    }
    handleClick() {
        console.log('btn is clicked');
    }
    render() {

        return (
            <View>
              <Text> This is Component1 </Text>
              <Text>
                { "rec msg is " + this.props.message }
              </Text>
              <Text>
                { this.state.name }
              </Text>
            </View>
            );
    }
}

// AppRegistry.registerComponent('Component1', () => Component1);
