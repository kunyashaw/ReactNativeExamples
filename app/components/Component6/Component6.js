import React, { Component } from 'React';
import { Text, View, FlatList } from 'react-native';

export default class Component6 extends Component {
    constructor() {
        super();
        this.myList = [];
    }
    getMsg() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((response) => {
                console.log(response);
                this.myList = response;
            });
    }
    componentWillMount() {
        this.getMsg();
    }
    renderMyList(tmp) {
        return (
            <Text>
              { tmp.item.title }
            </Text>
        )
    }
    render() {
        return (
            <View>
              <Text>Hello world</Text>
              <FlatList data={ this.myList } renderItem={ (tmp) => this.renderMyList(tmp) }>
              </FlatList>
            </View>
        )
    }

}