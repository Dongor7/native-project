import React, { Component } from 'react';
import HomeScreen from './screens/Home';
import LoginScreen from './screens/Login';
import RegistrationScreen from './screens/Registration';
import ContentScreen  from './screens/Content';
import { createStackNavigator } from 'react-navigation';

const RootStack = createStackNavigator(
    {
        Home: HomeScreen,
        Login: LoginScreen,
        Registration: RegistrationScreen,
        Content: ContentScreen
    },
    {
        initialRouteName: 'Home',
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        },
    },
);

export default class App extends Component {

    render() {
        return <RootStack/>
    }

}