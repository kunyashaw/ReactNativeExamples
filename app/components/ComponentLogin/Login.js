import React, { Component } from 'react';
import { AppRegistry, Text, Image, View, TextInput, StyleSheet, TouchableOpacity, KeyboardAvoidingView } from 'react-native'

export default class Login extends Component {
    constructor() {
        super();

    }
    handleLogin = () => {
        console.log(this.refs.myInput);
    }
    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={ styles.container }>
              <View style={ styles.logoContainer }>
                <Image style={ styles.logo } source={ require("../../../img/1.jpg") }></Image>
                <Text style={ styles.title }>MyLoginApp</Text>
              </View>
              <View style={ styles.formContainer }>
                <TextInput keyboardType="email-address" onSubmitEditing={ () => this.refs.myInput.focus() } style={ styles.input } returnKeyType="next" placeholder='用户名' placeholderTextColor="rgba(255,255,255,0.3)"></TextInput>
                <TextInput ref="myInput" style={ styles.input } secureTextEntry returnKeyType="go" placeholder='密码' placeholderTextColor="rgba(255,255,255,0.3)"></TextInput>
                <TouchableOpacity onPress={ this.handleLogin }>
                  <Text style={ styles.inputText }>Login</Text>
                </TouchableOpacity>
              </View>
            </KeyboardAvoidingView>
            );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3498db',

    },
    logoContainer: {
        flexGrow: 1,
        alignItems: 'center', //align-items属性定义项目在交叉轴上如何对齐。
        justifyContent: 'center' //justify-content属性定义了项目在主轴上的对齐方式
    },
    logo: {
        width: 100,
        height: 100
    },
    title: {
        color: '#ffffff',
        marginTop: 10,
        width: 100,
        textAlign: 'center'
    },
    formContainer: {
        padding: 20
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.2)',
        marginBottom: 20,
        paddingHorizontal: 10,
        color: '#fff'
    },
    inputText: {
        textAlign: 'center',
        height: 40,
        flexGrow: 1,
        paddingVertical: 7,
        color: '#ffffff',
        backgroundColor: 'rgba(30,30,200,0.1)',
        fontWeight: '800'
    }
})
