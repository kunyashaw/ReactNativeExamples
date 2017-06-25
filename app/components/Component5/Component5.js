import React, { Component } from 'react'
import { View, Text } from 'react-native'
import NavigationExperimental from 'react-native-deprecated-custom-components';
import Login from '../ComponentLogin/Login'
import Splash from '../ComponentLogin/splash'
const RouteMapper = (route, navigator) => {
    if (route.name === 'movies') {
        return;
    }
};
var Component5 = React.createClass({
    renderScene(route, navigator) {
        switch (route.id) {
            case 'login':
                return (<login navigator={ navigator } title="login" />)
            case 'splash':
                return (<splash user={ route.user } navigator={ navigator } title="splash" />)
        }
    },
    render: function() {

        return (
            <NavigationExperimental.Navigator initialRoute={ { id: 'login' } } renderScene={ this.renderScene } configureScreen={ (route, routeStack) => Navigator.SceneConfigs.FloatFromBottom } />
        )
    }
})

export default Component5 = Component5;