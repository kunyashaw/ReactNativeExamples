import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, NavigationAction } from 'react-native'
export default class Splash extends Component {
    jump() {
        alert('ready to jump');
    }
    render() {
        const {navigate} = this.props.navigation;
        return (
            <TouchableOpacity style={ styles.wrapper } onPress={ () => this.jump() }>
              <View style={ styles.myTextWrapper }>
                <Text style={ styles.myText }>开饭啦</Text>
              </View>
              <View>
                <Text style={ styles.bottomText }>Powered By React Native</Text>
              </View>
            </TouchableOpacity>

        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#2980b9',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    myText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white'
    },
    myTextWrapper: {
        flex: 1,
        justifyContent: 'center'
    },
    bottomText: {
        justifyContent: 'center',
        color: 'white',
        fontWeight: '200',
        paddingBottom: 20
    }
})