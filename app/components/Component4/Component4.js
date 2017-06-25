import React, { Component } from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity, TextInput, KeyboardAvoidingView } from "react-native";

class Component4 extends Component {
    constructor() {
        super();
        this.state = {
            behavior: 'padding'
        // there is three ways to adjust (position , height , padding ) 
        }
        //this.list = [100, 200, 300, 400, 500, 600];
        this.list = [
            {
                key: '1',
                name: 'zhangsan'
            },
            {
                key: '3',
                name: 'May'
            },
            {
                key: '4',
                name: 'Finch'
            },
            {
                key: '5',
                name: 'John'
            },
            {
                key: '6',
                name: 'ReactJS'
            },
            {
                key: '7',
                name: 'ReactNative'
            }
        ];
    }
    onPress(tempItem) {
        alert(tempItem.item.name + ' is clicked');
    }
    renderFlatListItem(tempItem) {
        console.log(tempItem);
        return (
            <TouchableOpacity onPress={ () => this.onPress(tempItem) }>
              <View>
                <Text style={ styles.myText }>
                  { tempItem.item.name }
                </Text>
              </View>
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <KeyboardAvoidingView behavior={ this.state.behavior }>
              <View style={ styles.myView }>
                <FlatList data={ this.list } renderItem={ (tempItem) => this.renderFlatListItem(tempItem) } />
                <TextInput placeholder="plz input sth" style={ styles.myTextInput }></TextInput>
              </View>
            </KeyboardAvoidingView>
            );
    }
}
const styles = StyleSheet.create({
    myView: {
        backgroundColor: '#eeeeee'
    },
    myText: {
        color: 'blue',
        fontSize: 20,
        padding: 20
    },
    myTextInput: {
        borderRadius: 5,
        borderWidth: 1,
        height: 44,
        paddingHorizontal: 10,
    },
})
export default Component4;
