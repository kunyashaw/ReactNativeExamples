import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native'
import Component1 from './app/components/Component1/Component1'
import Component5 from './app/components/Component5/Component5'
import Login from './app/components/ComponentLogin/Login'
import Splash from './app/components/ComponentLogin/splash'

export default class myapp extends Component {

  render() {
    return (
      <Component1></Component1>
      );
  }
}

// AppRegistry模块则是用来告知React Native哪一个组件被注册为整个应用的根容器。
//你无需在此深究，因为一般在整个应用里AppRegistry.registerComponent
//这个方法只会调用一次。上面的代码里已经包含了具体的用法，
//你只需整个复制到index.ios.js或是index.android.js文件中即可运行。

AppRegistry.registerComponent('myapp', () => myapp);


// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  * @flow
//  */

// import React, { Component } from 'react';
// import { AppRegistry, StyleSheet, Text, View } from 'react-native';

// export default class myapp extends Component {
//   render() {
//     return (< View style={ styles.container }>
//               < Text style={ styles.welcome }> Welcome to My APP !
//                 < /Text>
//                   <Text style={ styles.instructions }>To get started, edit index.android.js
//                     < /Text>
//                       < Text style={ styles.instructions }> Double tap R on your keyboard to reload,
//                         { '\n' } Shake or press menu button for dev menu
//                         < /Text>
//                           < /View>);
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF'
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5
//   }
// });

// AppRegistry.registerComponent('myapp', () => myapp);